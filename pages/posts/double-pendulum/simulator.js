import React from 'react';


function clamp(x, min, max) {
  return Math.max(min, Math.min(x, max));
}

export default  class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dtheta: {a:0, b:0}, theta: {a:0, b: 0}}; 
  }

  update() {
    const deltaTime = 0.1;
    this.setState((state) => {
      const ddtheta = {
        a: 0.01*(2*Math.random(-1, 1)-1)**3,
        b: 0.01*(2*Math.random(-1, 1)-1)**3
      };

      return {
        dtheta: {
          a: clamp(state.dtheta.a + ddtheta.a, -0.05, 0.05),
          b: clamp(state.dtheta.b + ddtheta.b, -0.05, 0.05),
        },
        theta: {
          a: state.theta.a + state.dtheta.a,
          b: state.theta.b + state.dtheta.b
        }
      }
    });

    this.props.onChange(this.state);
  }
  render() {
    return(<></>);
  }
}
