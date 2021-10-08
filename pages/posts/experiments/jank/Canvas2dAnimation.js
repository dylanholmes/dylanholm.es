export default class Canvas2dAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.fix_dpi();
  }

  clear() {
    this.ctx.clearRect(0, 0, 500, 500);
  }

  drawPoint() {
    const t = performance.now() / 1000;
    const x = 100 * Math.sin(3 * t);
    const y = 100 * Math.cos(3 * t);

    this.ctx.beginPath();
    this.ctx.ellipse(250 + x, 250 + y, 10, 10, 0, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }

  render() {
    this.clear();
    this.drawPoint();
  }

  fix_dpi() {
    let dpi = window.devicePixelRatio;
    let style_height = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
    this.canvas.setAttribute('height', style_height * dpi);
    this.canvas.setAttribute('width', style_width * dpi);
  }
}
