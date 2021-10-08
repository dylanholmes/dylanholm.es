import React from "react";
import Canvas2dAnimation from "./Canvas2dAnimation.js";
import OffScreenCanvas2dAnimation from "./OffScreenCanvas2dAnimation.js";
import SvgAnimation from "./SvgAnimation.js"

function jank(seconds) {
  const start = performance.now();
  let x = 1;
  let elapsedSeconds = () => (performance.now() - start) / 1000;
  while (elapsedSeconds() < seconds) {
    x = x + x * x + 1;
  }
  return x;
}

export default class Jank extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas2dAnimation = new Canvas2dAnimation(document.getElementById('canvas'));
    const svgAnimation = new SvgAnimation(document.getElementById('circle'));

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (isChrome) {
      const offscreenCanvas2dAnimation = new OffScreenCanvas2dAnimation(document.getElementById('offscreen-canvas'));
    }
    function animate() {
      canvas2dAnimation.render();
      svgAnimation.render();
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  render() {
    return (
      <>
      <style>
        {`
          #button {
            display: block;
            margin: 20px auto;
            padding: 20px;
          }
          #container {
            display: flex;
            justify-content: space-between;
          }
          .canvas {
            display: block;
            width: 250px;
            height: 250px;
            border: 1px solid;
          }
          #svg {
            width: 250px;
            height: 250px;
            border: 1px solid;
          }
        `}
      </style>
      <button id="button" onClick={ () => jank(2) }>Jank!</button>
      <div id="container">
        <div>
          <h2>Canvas</h2>
          <canvas id="canvas" className="canvas"></canvas>
        </div>
        <div>
          <h2>SVG</h2>
          <svg id="svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" overflow="visible">
            <circle id="circle" name="point-o" cx="0" cy="0" r="10" style={{fill:"black"}} />
          </svg>
        </div>
        <div>
          <h2>OffScreenCanvas</h2>
          <canvas id="offscreen-canvas"  className="canvas"></canvas>
        </div>
      </div>
      </>
    );
  }
}

