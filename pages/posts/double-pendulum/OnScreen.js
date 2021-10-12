import React from "react";

export default class OnScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {intersecting: false};
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      ([entry]) => this.setState({intersecting: entry.isIntersecting})
    )
    this.observer.observe(this.ref.current);
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  render() {
    return (
      <div ref={this.ref}>
        {(this.state.intersecting) ?(<>{this.props.children}</>): (<div style={this.props.style}></div>)}
      </div>
    );
  }
  
}