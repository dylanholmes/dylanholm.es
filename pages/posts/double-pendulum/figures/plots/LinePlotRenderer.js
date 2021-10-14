import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import * as THREE from 'three';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';

class Segment {
  constructor(scene, material, xy_positions, canvasWidth, canvasHeight) {
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

    this.lineWidth = 1;
    if (this.lineWidth == 1) {
      this.geometry = new THREE.BufferGeometry();
      this.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute( positions, 3 )
      );
      this.geometry.computeBoundingSphere();

      this.line = new THREE.Line( this.geometry, material );
      this.scene.add( this.line );
    } else {
      this.material = new MeshLineMaterial({color: 'black',
      resolution: new THREE.Vector2(canvasWidth, canvasHeight), sizeAttenuation: 0, lineWidth: this.lineWidth});
      this.line = new MeshLine();
      this.line.setPoints(positions);

      this.mesh = new THREE.Mesh(this.line, this.material);

      this.scene.add( this.mesh );
    }
  }

  dispose() {
    if (this.scene) {
      if (this.lineWidth == 1) {
        this.scene.remove( this.line );
        this.scene = null;

        // this.line.dispose();
        this.line = null;

        this.geometry.dispose();
        this.geometry = null;
      } else {
        this.scene.remove( this.mesh );
        this.scene = null;

        this.line.dispose();
        this.line = null;

        this.material.dispose();
        this.material = null;

        this.mesh = null;
      }
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
    while (i < this.segments.length && this.segments[i].end < windowStart) {
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

export default class LinePlotRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('webgl');

    const width = this.styleWidth();
    const height = this.styleHeight();

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-width,width / 2, height / 2, height / - 2,1,1000
    );
    this.camera.position.set(0, 0, 1);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( width, height );

		this.material = new THREE.LineBasicMaterial( { color: 0x000000 } );

    this.segmentSequences = []
  }

  styleHeight() {
    return +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
  }

  styleWidth() {
    return +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
  }

  updateCamera(xMin, xMax, yMin, yMax) {
    this.camera.left = xMin;
    this.camera.right = xMax;
    this.camera.top = yMax;
    this.camera.bottom = yMin;
    this.camera.updateProjectionMatrix();
  }

  updateSegments(windowStart, positionSequences) {
    while (this.segmentSequences.length < positionSequences.length)  {
      this.segmentSequences.push(new SegmentSequence())
    }
    const canvasWidth = this.styleWidth();
    const canvasHeight = this.styleHeight();
    this.segmentSequences.forEach((seq, i) => {
      seq.addSegment(new Segment(this.scene, this.material, positionSequences[i], canvasWidth, canvasHeight));
      seq.removeOutOfWindowSegments(windowStart);
    })
  }

  render(
    xMin,
    xMax,
    yMin,
    yMax,
    positionSequences
  ) {
    this.updateSegments(xMin, positionSequences);
    this.updateCamera(xMin, xMax, yMin, yMax);
    this.renderer.render( this.scene, this.camera );
  }

}
