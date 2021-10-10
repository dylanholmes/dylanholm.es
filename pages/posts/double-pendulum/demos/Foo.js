import React from "react";
import PureCanvas from "./PureCanvas.js"
import CanvasWebGLV1 from "./CanvasWebGLV1.js"
import AnimationController from "./AnimationController.js"

import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'



export default class Foo extends React.Component {
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
    this.demo = new CanvasWebGLV1(this.canvas);
    // const animationController = new AnimationController(this.demo);
    // animationController.startAnimation();
    // this.setState({animationController})
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    const state = this.context.simulationState;
    if (state && this.demo) {
      console.log(this.context);
      this.demo.render(state.xy_positions[0], state.xy_positions);
      this.demo = null;
    }
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
            <DoublePendulumSimulationContext.Consumer>
      {context => {
        // console.log("render");
        this.context = context;

        const state = this.context.simulationState;
    if (state && this.demo) {
      // console.log(this.context);
      this.demo.render(state.xy_positions[state.xy_positions.length-2], state.xy_positions);
      // this.demo = null;
    }

          // const state = context.simulationState;
          // if (state && this.demo) {
          //   this.demo.render(state.xy_positions[0], state.xy_positions);
          // }
      }}</DoublePendulumSimulationContext.Consumer>
              <style>
                {`
                  .canvas {
                    display: block;
                    width: 250px;
                    height: 250px;
                    border: 1px solid;
                  }
                `}
              </style>
              <PureCanvas id="canvas-v3" className="canvas" setCanvasRef={this.setCanvasRef}/>
            </>
          );

  }
}
