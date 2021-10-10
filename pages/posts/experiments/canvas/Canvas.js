import React from "react";
import PureCanvas from "./PureCanvas.js";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.setCanvasRef = this.setCanvasRef.bind(this);
  }

  setCanvasRef(canvas) {
    this.canvas = canvas;
  }

  componentDidUpdate() {
  }

  render() {
    return <PureCanvas id={this.props.id} style={this.props.style} className={this.props.className} setCanvasRef={this.setCanvasRef}></PureCanvas>;
  }
}
