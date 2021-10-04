import React from 'react';
import DoublePendulumModel from './double-pendulum-model.js';
import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'

export default class DoublePendulumSimulation extends React.Component {

  constructor(props) {
    super(props);

    this.setSimulationState = (simulationState) => {
      this.setState(state => ({
        simulationState: simulationState
      }))
    }

    this.state = {
      simulationState: null,
      setSimulationState: this.setSimulationState

    }

    this.handleChange = this.handleChange.bind(this);
    const simulatorRef = this.simulatorRef = React.createRef();
    this.componentsToUpdate = [simulatorRef];
    this.animationID = null;
  }

  handleChange(simulationState) {
    this.setState({simulationState: simulationState})
  }

  componentDidMount() {
    this.animationID = window.requestAnimationFrame((timestamp) => this.update(timestamp));
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationID);
  }

  update(timestamp) {
    if (this.previousTimeStamp === undefined) {
      this.previousTimeStamp = timestamp;
    }
    const delta =  timestamp - this.previousTimeStamp; //(timestamp - this.previousTimeStamp) / 1000.0;
    this.componentsToUpdate.map(component => component.current.update(delta));

    this.animationID = window.requestAnimationFrame((timestamp) => this.update(timestamp));
  }

  render() {
    return(
      <DoublePendulumSimulationContext.Provider value={this.state}>
        <DoublePendulumModel ref={ this.simulatorRef } onChange={ this.handleChange } />
        <div>{ this.props.children }</div>
      </DoublePendulumSimulationContext.Provider>
    );
  }
};
DoublePendulumSimulation.contextType = DoublePendulumSimulationContext;
