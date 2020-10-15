import React from 'react';
import Simulator from './simulator.js';
import Viewer from './viewer.js';
import DoublePendulumViewer from './double-pendulum-viewer.js';
import FreeBodyViewer from './free-body-viewer.js';

export default class Loop extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {dtheta: {a:0, b:0}, theta: {a:0, b: 0}}; 
    const theta = this.theta = React.createRef();
    this.componentsToUpdate = [theta];
    this.animationID = null;    
  }

  handleChange(state) {
    this.setState(state);
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
      <div>
        <div>
          <Simulator ref={ this.theta } onChange={ this.handleChange } />
          <Viewer state={ state } />
          {/* <DoublePendulumViewer state={ state } /> */}
          {/* <FreeBodyViewer state={ state } /> */}
          <style jsx>{`
            position: fixed;
            top: 25%;
            width: 20%;
            min-width: 20em;
            height: 50%;
            max-height: 45em;
            right: 0;
          `}</style>
        </div>
        { this.props.children }
      </div>
    );
  }
}