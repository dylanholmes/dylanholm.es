import React from 'react';

export default class PureCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    let canvas = this.canvasRef.current;
    this.props.setCanvasRef(canvas);
  }

  render() {
    return (
      <canvas ref={this.canvasRef} style={this.props.style} />
    )
  }
}
