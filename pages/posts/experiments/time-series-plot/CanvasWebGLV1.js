import * as THREE from 'three';

export default class CanvasWebGLV1 {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('webgl');
    // this.fix_dpi();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 27, this.styleWidth() / this.styleHeight(), 1, 4000 );
		this.camera.position.z = 2750;

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( this.styleWidth(), this.styleHeight() );

    this.clock = new THREE.Clock();

		this.geometry = new THREE.BufferGeometry();
		this.material = new THREE.LineBasicMaterial( { color: 0x000000 } );

    const positions = [];

    const segments = 10000;
    const r = 800;
    for ( let i = 0; i < segments; i ++ ) {
      const x = Math.random() * r - r / 2;
      const y = Math.random() * r - r / 2;
      const z = Math.random() * r - r / 2;
      positions.push( x, y, z );
    }

    this.geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
    this.geometry.computeBoundingSphere();
    this.line = new THREE.Line( this.geometry, this.material );

    this.scene.add( this.line );
  }

  fix_dpi() {
    let dpi = window.devicePixelRatio;
    let style_height = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
    this.canvas.setAttribute('height', style_height * dpi);
    this.canvas.setAttribute('width', style_width * dpi);
  }

  styleHeight() {
    return +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
  }

  styleWidth() {
    return +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
  }

  render(time) {
    this.line.rotation.x += 0.01;
    this.line.rotation.y += 0.01;

    this.renderer.render( this.scene, this.camera );
  }

}
