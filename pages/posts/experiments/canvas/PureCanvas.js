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
      <canvas ref={this.canvasRef} id={this.props.id} style={this.props.style} className={this.props.className}  />
    )
  }
}
