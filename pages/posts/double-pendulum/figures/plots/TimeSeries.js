import React from "react";
import CanvasWebGLV1 from "../../demos/CanvasWebGLV1.js"


export default class TimeSeries
 extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.demo = new CanvasWebGLV1(this.canvasRef.current);
  }

  render() {

    const positions = this.props.positions;
    if (positions && this.demo) {
      this.demo.render(positions[0][0], positions);
    }

    const canvasStyle = {
      display: "block",
      width: "100%",
      height: "100px",
      border: "1px solid",
    }

    return <canvas ref={this.canvasRef} style={canvasStyle} />;
  }
}
