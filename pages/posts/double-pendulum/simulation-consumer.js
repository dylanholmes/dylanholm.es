import React from 'react';
import SimulationContext from './simulation-context.js'

class SimulationConsumer extends React.Component {
  render() {
    const a = this.context.simulationState.theta.a;
    return(<p>{a}</p>);
  }
}
SimulationConsumer.contextType = SimulationContext;

export default SimulationConsumer;