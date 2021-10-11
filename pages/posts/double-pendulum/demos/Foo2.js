import React from "react";
import CanvasWebGLV1 from "./CanvasWebGLV1.js"

import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'



export default class Foo2 extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.state = {
      animation: null
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.demo = new CanvasWebGLV1(this.canvasRef.current);
    console.log(this.demo);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {

    const state = this.props.context.simulationState;
    // console.log(this.demo);
    if (state && this.demo) {
      // console.log(this.props.context);
      this.demo.render(state.xy_positions[0], state.xy_positions);
    }

    const canvasStyle = {
      display: "block",
      width: "250px",
      height: "250px",
      border: "1px solid",
    }

    return (
      <>
        <canvas ref={this.canvasRef} style={canvasStyle} />;
      </>
    );

  }
}
