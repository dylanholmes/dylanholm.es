import { throwStatement } from "@babel/types";

function mapToRange(x, smin, smax, dmin, dmax) {
  return (x - smin) * (dmax - dmin) / (smax - smin) + dmin;
}

function mapToScale(x, smin, smax, dmin, dmax) {
  return (x) * (dmax - dmin) / (smax - smin);
}

export default class Canvas2dV2 {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.fix_dpi();
  }

  fix_dpi() {
    let dpi = window.devicePixelRatio;
    let style_height = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
    this.canvas.setAttribute('height', style_height * dpi);
    this.canvas.setAttribute('width', style_width * dpi);
  }

  _toPixelX(x) {
    return mapToRange(x, this.xmin, this.xmax, 0, this.ctx.canvas.width)
  }

  _toPixelY(y) {
    return mapToRange(y, this.ymin, this.ymax, 0, this.ctx.canvas.height)
  }

  _toPixel(point) {
    return [ this._toPixelX(point[0]), this._toPixelY(point[1]) ];
  }

  shiftLeft(dx) {
    const wpx = this.ctx.canvas.width;
    const hpx = this.ctx.canvas.height;

    // ceil to move at least one ...
    const dxpx = Math.round(mapToScale(dx, this.xmin, this.xmax, 0, wpx));


    if (dxpx >= wpx) {
      this.ctx.clearRect(0, 0, wpx, hpx);
    } else {
      const imageData = this.ctx.getImageData(dxpx, 0, wpx-dxpx, hpx);
      this.ctx.putImageData(imageData, 0, 0);
      this.ctx.clearRect(wpx-dxpx, 0, dxpx, hpx);
    }

    // update the x axis range
    const pixelAlignedDx = mapToScale(dxpx, 0, wpx, this.xmin, this.xmax);
    this.xmin = this.xmin + pixelAlignedDx;
    this.xmax = this.xmax + pixelAlignedDx;
  }

  drawPoints(points) {
    const n = points.length;
    if (n < 1) {
      return;
    }
    const moveTo = (p) => {
      const pixel = this._toPixel(p);
      this.ctx.moveTo(pixel[0], pixel[1]);
    }
    const lineTo = (p) => {
      const pixel = this._toPixel(p);
      this.ctx.lineTo(pixel[0], pixel[1]);
    }

    if (this.lastPoints && this.lastPoints.length > 0) {
      // TODO: explain why we draw the entire
      // previous set of bufferred values, tldr;
      // its because one point may be smaller than
      // a pixel which will leave a thinner line
      // connecting each bufferred region.
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = 'black';
      this.ctx.beginPath();
      moveTo(this.lastPoints[0]);
      for (let i = 1; i < this.lastPoints.length; ++i) {
        lineTo(this.lastPoints[i]);
      }
      lineTo(points[0]);
    } else {
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = 'black';
      this.ctx.beginPath();
      moveTo(points[0]);
    }

    for (let i = 1; i < n; ++i) {
      lineTo(points[i]);
    }
    this.ctx.stroke();

    this.lastPoints = points;
  }

  render(time) {
    this.lastTime = this.lastTime || time;
    const dt = time - this.lastTime;
    const winx = 4000;

    this.xmin = this.xmin || time - winx;
    this.xmax = this.xmax || time;
    this.ymin = -100;
    this.ymax = 100;

    this.shiftLeft(dt);

    const points = this.generateSineCurve(Math.max(this.xmin,this.xmax-dt),0.1,this.xmax);
    this.drawPoints(points);

    this.lastTime = time;
  }

  generateSineCurve(start, step, end) {
    const func = (x) => 100*Math.sin(10.0*x/4000);
    const n = Math.floor((end-start) / step);
    const points = new Array(n);
    for (let i = 0; i < n; ++i) {
      const t = start + i * step;
      points[i] = [t, func(t)];
    }
    return points;
  }

}
