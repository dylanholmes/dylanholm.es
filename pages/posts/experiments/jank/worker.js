class Canvas2dAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  clear() {
    this.ctx.clearRect(0, 0, 500, 500);
  }

  drawPoint() {
    const t = performance.now() / 1000.0;
    const x = 100.0 * Math.sin(3.0 * t);
    const y = 100.0 * Math.cos(3.0 * t);

    this.ctx.beginPath();
    this.ctx.ellipse(250 + x, 250 + y, 10, 10, 0, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }

  render() {
    this.clear();
    this.drawPoint();
  }

  // fix_dpi() {
  //   let dpi = 2; //window.devicePixelRatio;
  //   let style_height = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
  //   let style_width = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
  //   this.canvas.setAttribute('height', style_height * dpi);
  //   this.canvas.setAttribute('width', style_width * dpi);
  // }
}

onmessage = function(evt) {
  var canvas = evt.data.canvas;
  //var gl = canvas.getContext("2d");
  const canvas2dAnimation = new Canvas2dAnimation(canvas);

  // ... some drawing using the gl context ...
  function render(time) {
    // ... some drawing using the gl context ...
    canvas2dAnimation.render();
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
