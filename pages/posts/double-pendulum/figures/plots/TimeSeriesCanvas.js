import React from "react";
import LinePlotRenderer from "./LinePlotRenderer.js"


export default class TimeSeries
 extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.demo = new LinePlotRenderer(this.canvasRef.current);
  }

  render() {
    const xMin = this.props.xMin
    const xMax = this.props.xMax
    const yMin = this.props.yMin
    const yMax = this.props.yMax
    const positionSequences = this.props.positionSequences;
    if (positionSequences && this.demo) {
      this.demo.render(xMin, xMax, yMin, yMax, positionSequences);
    }

    const defaultCanvasStyle = {
      display: "block",
      width: "100%",
      height: "100px",
    }

    return <canvas ref={this.canvasRef} style={{...defaultCanvasStyle, ...this.props.style}} />;
  }
}
