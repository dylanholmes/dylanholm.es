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

  generateSineValues(offset, sx, ex) {
    const func = (x) => 250*Math.sin(10.0*x/this.ctx.canvas.width) + 250;
    const n = 100;
    const values = new Array(n);
    const xi = (i) => i * (ex-sx) / n + sx;
    for (let i = 0; i < n; ++i) {
      values[i] = func(xi(i)+offset)
    }
    return values;
  }

  drawValues(values, sx, ex) {
    const n = values.length;
    const xi = (i) => i * (ex-sx) / n + sx;

    if (this.lastValues) {
      // TODO: explain why we draw the entire
      // previous set of bufferred values, tldr;
      // its because one point may be smaller than
      // a pixel which will leave a thinner line
      // connecting each bufferred region.
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = 'black';
      this.ctx.beginPath();
      this.ctx.moveTo(xi(-n), this.lastValues[0]);
      for (let i = 1; i < n; ++i) {
        this.ctx.lineTo(xi(i-n), this.lastValues[i]);
      }
      this.ctx.lineTo(xi(0), values[0]);
    } else {
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = 'black';
      this.ctx.beginPath();
      this.ctx.moveTo(xi(0), values[0]);
    }

    for (let i = 1; i < n; ++i) {
      this.ctx.lineTo(xi(i), values[i]);
    }
    this.ctx.stroke();



    this.lastValues = values;
  }

  render(time) {
    this.prevTime = this.prevTime || time;
    this.deltaTime = time - this.prevTime;
    this.shiftPixels = 10; //Math.ceil(this.deltaTime*0.1);
    this.totalShift = (this.totalShift || 0 ) + this.shiftPixels;
    this.shiftLeft(this.shiftPixels);

    let width = this.ctx.canvas.width;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    const sx = width-this.shiftPixels;
    const ex = width;
    const values = this.generateSineValues(this.totalShift, sx, ex);
    this.drawValues(values, sx, ex);


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
