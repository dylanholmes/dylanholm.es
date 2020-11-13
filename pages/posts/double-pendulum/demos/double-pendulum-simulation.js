import React from 'react';
import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'
import DoublePendulumModel from './double-pendulum-model2.js';

class DoublePendulumSimulation extends React.Component {

  constructor(props) {
    super(props);

    this.setSim = (sim) => {
      this.setState(state => ({
        sim: sim
      }))
    }

    this.state = {
      sim: null,
      setSim: this.setSim

    }

    this.modelRef = React.createRef();
    this.animationID = null;

    this.startingTime = null;
    this.lastTime = null;
    this.totalElapsedTime = null;
    this.elapsedSinceLastUpdate = null;
  }
  
  componentDidMount() {  
    this.animationID = window.requestAnimationFrame((currentTime) => this.update(currentTime));  
  }
  
  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationID);
  }
  
  update(currentTime) {
    if(!this.startingTime){this.startingTime=currentTime;}
    if(!this.lastTime){this.lastTime=currentTime;}
    this.totalElapsedTime=(currentTime-this.startingTime);
    this.elapsedSinceLastLoop=(currentTime-this.lastTime);
    this.lastTime=currentTime;
    this.modelRef.current.update(this.elapsedSinceLastLoop);
    this.animationID = window.requestAnimationFrame((currentTime) => this.update(currentTime));  
  }
  
  render() {
    const state = this.state;
    // console.log(state);
    return(
      <DoublePendulumSimulationContext.Provider value={this.state}>
        <DoublePendulumModel ref={ this.modelRef } />
        <div>{ this.props.children }</div>
      </DoublePendulumSimulationContext.Provider>
    );
  }
};

export default DoublePendulumSimulation;