import React from "react";

export default class Jank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <style jsx>
        {`
          #button {
            display: block;
            margin: 20px auto;
            padding: 20px;

          }

          #container {
            display: flex;
          }

          .canvas {
            display: block;
            width: 250px;
            height: 250px;
            border: 1px solid;
            margin: 0 auto;
          }

          #svg {
            width: 250px;
            height: 250px;
            border: 1px solid;
          }
        `}
      </style>
      <button id="button" onClick="jank(2)">Jank!</button>
      <div id="container">
        <div>
          <h2>Canvas</h2>
          <canvas id="canvas" class="canvas"></canvas>
        </div>
        <div>
          <h2>SVG</h2>
          <svg id="svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" overflow="visible">
            <circle id="circle" name="point-o" cx="0" cy="0" r="10" style="fill:black" />
          </svg>
        </div>
        <div>
          <h2>OffScreenCanvas</h2>
          <canvas id="offscreen-canvas"  class="canvas"></canvas>
        </div>
      </div>
      </>
    );
  }
}


  // <script>
  //   function jank(seconds) {
  //     const start = performance.now();
  //     let x = 1;
  //     let elapsedSeconds = () => (performance.now() - start) / 1000;
  //     while (elapsedSeconds() < seconds) {
  //       x = x + x * x + 1;
  //     }
  //     return x;
  //   }

  //   // function garbage(num) {
  //   //   for (let i = 0; i < num; ++i) {
  //   //     new Date();
  //   //   }
  //   // }

  //   class Canvas2dAnimation {
  //     constructor(canvas) {
  //       this.canvas = canvas;
  //       this.ctx = canvas.getContext('2d');

  //       this.fix_dpi();
  //     }

  //     clear() {
  //       this.ctx.clearRect(0, 0, 500, 500);
  //     }

  //     drawPoint() {
  //       const t = performance.now() / 1000;
  //       const x = 100 * Math.sin(3 * t);
  //       const y = 100 * Math.cos(3 * t);

  //       this.ctx.beginPath();
  //       this.ctx.ellipse(250 + x, 250 + y, 10, 10, 0, 0, 2 * Math.PI);
  //       this.ctx.fill();
  //       this.ctx.stroke();
  //     }

  //     render() {
  //       this.clear();
  //       this.drawPoint();
  //     }

  //     fix_dpi() {
  //       let dpi = window.devicePixelRatio;
  //       let style_height = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
  //       let style_width = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
  //       this.canvas.setAttribute('height', style_height * dpi);
  //       this.canvas.setAttribute('width', style_width * dpi);
  //     }
  //   }

  //   class SvgAnimation {
  //     constructor(circle) {
  //       this.circle = circle;
  //     }

  //     drawPoint() {
  //       const t = performance.now() / 1000;
  //       const x = 100 * Math.sin(3 * t);
  //       const y = 100 * Math.cos(3 * t);

  //       this.circle.setAttribute('cx', 250+x);
  //       this.circle.setAttribute('cy', 250 +y);
  //     }

  //     render() {
  //       this.drawPoint();
  //     }

  //     fix_dpi() {
  //       let dpi = window.devicePixelRatio;
  //       let style_height = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
  //       let style_width = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
  //       this.canvas.setAttribute('height', style_height * dpi);
  //       this.canvas.setAttribute('width', style_width * dpi);
  //     }
  //   }

  //   function fix_dpi(canvas) {
  //       let dpi = window.devicePixelRatio;
  //       let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
  //       let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
  //       canvas.setAttribute('height', style_height * dpi);
  //       canvas.setAttribute('width', style_width * dpi);
  //     }

  //   const canvas2dAnimation = new Canvas2dAnimation(document.getElementById('canvas'));
  //   const svgAnimation = new SvgAnimation(document.getElementById('circle'));

  //   var htmlCanvas = document.getElementById('offscreen-canvas');
  //   fix_dpi(htmlCanvas);
  //   console.log(htmlCanvas);
  //   var offscreen = htmlCanvas.transferControlToOffscreen();

  //   var worker = new Worker("worker.js");
  //   worker.postMessage({ canvas: offscreen }, [offscreen]);


  //   function animate() {
  //     canvas2dAnimation.render();
  //     svgAnimation.render();
  //     requestAnimationFrame(animate);
  //   }
  //   requestAnimationFrame(animate);
  // </script>

