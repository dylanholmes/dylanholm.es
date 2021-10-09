import * as THREE from 'three';

class Segment {
  constructor(scene, material, func, start, step, end) {
    this.scene = scene;
    this.material = material;
    this.func = func;
    this.start = start;
    this.step = step;
    this.end = end;

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute( this.generateSineCurve(start, step, end), 3 )
    );
    this.geometry.computeBoundingSphere();

    this.line = new THREE.Line( this.geometry, material );

    this.scene.add( this.line );
  }

  generateSineCurve(start, step, end) {

    const n = Math.floor((end-start) / step);
    const positions = new Array(n*3);
    for (let i = 0; i < n*3; i += 3) {
      const t = start + i * step;
      const x = t;
      const y = this.func(t);
      const z = 0;
      positions[i] = x;
      positions[i+1] = y;
      positions[i+2] = z;
    }
    return positions;
  }

  dispose() {
    if (this.scene) {
      this.scene.remove( this.line );
      this.scene = null;

      // this.line.dispose();
      this.line = null;

      this.geometry.dispose();
      this.geometry = null;
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
		this.material = new THREE.LineBasicMaterial( { color: 0x000000 } );

    this.segmentSequences = []
    for (let i = 0; i < 4; ++i) {
      this.segmentSequences.push(new SegmentSequence())
    }
  }

  styleHeight() {
    return +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
  }

  styleWidth() {
    return +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
  }

  updateSegments(time, windowStart, segmentSize) {
    this.segmentSequences.forEach((seq, i) => {
      const func = (x) => 100*Math.sin((10.0+i)*x/4000);
      seq.addSegment(new Segment(this.scene, this.material, func, time-segmentSize, 2, time));
      seq.removeOutOfWindowSegments(windowStart);
    })
  }

  render(time) {
    this.lastTime = this.lastTime || time;

    const deltaTime = time - this.lastTime;

    this.windowSize = (this.windowSize || 2000);// + 500*Math.sin((20.0)*time/4000);
    const windowSize = this.windowSize;
    const windowStart = time - windowSize
    const windowEnd = time;
    const segmentSize = deltaTime;

    this.updateSegments(time, windowStart, segmentSize);

    this.camera.left = windowStart;
    this.camera.right = windowEnd;
    this.camera.top = 100;
    this.camera.bottom = -100;
    this.camera.position.set(0, 0, 1);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateProjectionMatrix();

    this.renderer.render( this.scene, this.camera );

    this.lastTime = time;
  }

}
