export default class Canvas2dPlot {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.fix_dpi();
  }

  shiftLeft(x) {
    const imageData = this.ctx.getImageData(x, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.putImageData(imageData, 0, 0);
    this.ctx.clearRect(this.ctx.canvas.width-x, 0, x, this.ctx.canvas.height);
  }

  drawSine(offset, sx, ex) {
    const func = (x) => 250*Math.sin(10.0*x/this.ctx.canvas.width) + 250;
    for (let x = sx; x < ex; ++x) {
      this.ctx.beginPath();

      const x1 = x - 1;
      const y1 = func(x1+offset);
      this.ctx.moveTo(x1, y1);

      const x2 = x;
      const y2 = func(x2+offset);
      this.ctx.lineTo(x2, y2);

      this.ctx.stroke();
    }
  }

  render(time) {
    this.prevTime = this.prevTime || time;
    this.deltaTime = time - this.prevTime;
    this.shiftPixels = 2; // Math.ceil(this.deltaTime*0.1);
    this.totalShift = (this.totalShift || 0 ) + this.shiftPixels;
    this.shiftLeft(this.shiftPixels);

    let width = this.ctx.canvas.width;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.drawSine(this.totalShift, width-this.shiftPixels, width);


    this.prevTime = time;


  }

  fix_dpi() {
    let dpi = window.devicePixelRatio;
    let style_height = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
    this.canvas.setAttribute('height', style_height * dpi);
    this.canvas.setAttribute('width', style_width * dpi);
  }
}
