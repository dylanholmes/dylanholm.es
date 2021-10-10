import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import * as THREE from 'three';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';

class Segment {
  constructor(scene, material, xy_positions) {
    this.scene = scene;
    this.material = material;
    this.start = xy_positions[0];
    this.end = xy_positions[xy_positions.length-2];

    const numPoints = xy_positions.length / 2;
    const positions = new Array(numPoints * 3);
    for (let i = 0; i < numPoints; ++i) {
      positions[3*i] = xy_positions[2*i];
      positions[3*i+1] = xy_positions[2*i+1];
      positions[3*i+2] = 0;
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute( positions, 3 )
    );
    this.geometry.computeBoundingSphere();

    this.line = new THREE.Line( this.geometry, material );
    this.scene.add( this.line );

    // DOESN't WOKR...
    // this.material = new MeshLineMaterial({color: 'black',
    // resolution: new THREE.Vector2(250, 250), sizeAttenuation: 0, lineWidth: 5});
    // this.line = new MeshLine();
    // this.line.setPoints(positions);

    // this.mesh = new THREE.Mesh(this.line, this.material);

    // this.scene.add( this.mesh );
  }

  dispose() {
    if (this.scene) {
      this.scene.remove( this.line );
      this.scene = null;

      // this.line.dispose();
      this.line = null;

      this.geometry.dispose();
      this.geometry = null;

      /////////

      // this.scene.remove( this.mesh );
      // this.scene = null;

      // this.line.dispose();
      // this.line = null;

      // this.material.dispose();
      // this.material = null;

      // this.mesh.dispose();
      // this.mesh = null;
    }
  }
}

class SegmentSequence {
  constructor() {
    this.segments = []
  }

  addSegment(segment) {
    this.segments.push(segment);
  }

  removeOutOfWindowSegments(windowStart) {
    let i = 0;
    while (this.segments[i].end < windowStart) {
      this.segments[i].dispose();
      ++i;
    }
    if (i > 0) {
      this.segments.shift(i);
    }
  }

  dispose() {
    this.segments.forEach(segment => segment.dispose());
    this.segments = null;
  }
}

export default class CanvasWebGLV1 {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('webgl');

    const width = this.styleWidth();
    const height = this.styleHeight();

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(
      width / - 2, // left
      width / 2,  // right
      height / 2,  // top
      height / - 2, // bottom
      1, // near
      1000 // far
    );

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( width, height );

    this.clock = new THREE.Clock();
		this.material = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 10 } );

    this.segmentSequences = []
    for (let i = 0; i < 1; ++i) {
      this.segmentSequences.push(new SegmentSequence())
    }
  }

  styleHeight() {
    return +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
  }

  styleWidth() {
    return +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
  }

  updateSegments(windowStart, xy_positions) {
    this.segmentSequences.forEach((seq, i) => {
      seq.addSegment(new Segment(this.scene, this.material, xy_positions));
      seq.removeOutOfWindowSegments(windowStart);
    })
  }

  render(time, xy_positions) {
    this.lastTime = this.lastTime || time;

    const deltaTime = time - this.lastTime;

    this.windowSize = (this.windowSize || 10000);// + 500*Math.sin((20.0)*time/4000);
    const windowSize = this.windowSize;
    const windowStart = time - windowSize
    const windowEnd = time;

    this.updateSegments(windowStart, xy_positions);


    this.camera.left = windowStart;
    this.camera.right = windowEnd;
    this.camera.top = 20;
    this.camera.bottom = -20;
    this.camera.position.set(0, 0, 1);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateProjectionMatrix();

    this.renderer.render( this.scene, this.camera );

    this.lastTime = time;
  }

}
