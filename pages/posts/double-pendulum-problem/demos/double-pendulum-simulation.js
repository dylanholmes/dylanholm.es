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

    this.simulatorRef = React.createRef();

    this.onSimulationStep = this.onSimulationStep.bind(this);

    this.componentsToUpdate = [this.simulatorRef];
    this.animationID = null;
  }

  onSimulationStep(simulationState) {
    this.setState({simulationState: simulationState})
  }

  componentDidMount() {
    this.animationID = window.requestAnimationFrame((timestamp) => this.update(timestamp));
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationID);
  }

  update(time) {
    // this.lastTime = this.lastTime || time;

    // Compute delta time.
    // const deltaTime =  timestamp - this.previousTimeStamp;


    if (this.simulatorRef.current) {
      // TODO: why is this becoming null????
      this.simulatorRef.current.update(time)
    }

    // Update lastTime.
    // this.lastTime = time;

    // Request next animation frame.
    this.animationID = window.requestAnimationFrame((time) => this.update(time));
  }

  render() {
    return(
      <DoublePendulumSimulationContext.Provider value={this.state}>
        <DoublePendulumModel ref={ this.simulatorRef } onChange={ this.onSimulationStep } />
        <div>{ this.props.children }</div>
      </DoublePendulumSimulationContext.Provider>
    );
  }
};
DoublePendulumSimulation.contextType = DoublePendulumSimulationContext;
