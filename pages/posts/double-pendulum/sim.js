import React from 'react';
import SimulationContext from './simulation-context.js'
import SimulationConsumer from './simulation-consumer.js'
import Simulator from './simulator.js';

export default class Simulation extends React.Component {

  constructor(props) {
    super(props);

    this.setSimulationState = (simulationState) => {
      this.setState(state => ({
        simulationState: simulationState
      }))
    }

    this.state = {
      simulationState: {theta: {a: 0, b: 0}},
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
    this.animationID = window.requestAnimationFrame(() => this.update());  
  }
  
  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationID);
  }
  
  update() {
    this.componentsToUpdate.map(component => component.current.update());
  
    this.animationID = window.requestAnimationFrame(() => this.update());  
  }
  
  render() {
    const state = this.state;
    return(
      <SimulationContext.Provider value={this.state}>
        <Simulator ref={ this.simulatorRef } onChange={ this.handleChange } />
        <div>{ this.props.children }</div>
      </SimulationContext.Provider>
    );
  }
};
Simulation.contextType = SimulationContext;