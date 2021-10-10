import React from "react";
import PureCanvas from "./PureCanvas.js"
import Canvas from "./Canvas.js"
import CanvasWebGLV1 from "./CanvasWebGLV1.js"
import AnimationController from "./AnimationController.js"


export default class Plot extends React.Component {
  constructor(props) {
    super(props);

    this.setCanvasRef = this.setCanvasRef.bind(this);
    this.state = {
      animation: null
    }
  }

  setCanvasRef(canvas) {
    this.canvas = canvas;
  }

  componentDidMount() {
    const animationController = new AnimationController(
      // new Canvas2dV1(document.getElementById('canvas-v1')),
      // new Canvas2dV2(document.getElementById('canvas-v2')),
      new CanvasWebGLV1(this.canvas)
    );
    animationController.startAnimation();
    this.setState({animationController})
  }

  render() {
    // let toggleAnimation = () => {}
    // if (this.state.animationController) {
    //   toggleAnimation = () => {
    //     this.state.animationController.toggleAnimation();
    //   }
    // }

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
        {/* <button id="button" onClick={toggleAnimation} style={{display: 'block'}}>play/pause</button> */}
        <div id="container">
          <div>
            <h2>Canvas</h2>
            <PureCanvas id="canvas-v3" className="canvas" setCanvasRef={this.setCanvasRef}></PureCanvas>;
          </div>
        </div>
      </>
    );
  }
}
