import React from 'react';
import SimulationContext from './simulation-context.js'

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { a, b } = this.context.simulationState.theta;
    return (
      <p>a: {a.toFixed(2)}</p>
    );
  }
}
Viewer.contextType = SimulationContext

export default Viewer;