import React from 'react';

import Worker from './example.worker';

class DoublePendulumModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.onWorkerMessage = this.onWorkerMessage.bind(this);

    this.animationHandle = null;
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.worker = new Worker();
    this.worker.addEventListener('message', this.onWorkerMessage);

    this.animationHandle = window.requestAnimationFrame(this.update);
  }

  onWorkerMessage(event) {
    this.state = event.data;
    if (window) {
      window.sim = {state: event.data};
    }
  }

  update(time) {
    const delta = this.time ? (time - this.time) : 16;
    this.time = time;
     //console.log(delta);
    //  console.log(window.sim.state)
    // if (window && window.sim && window.sim.state)
    //   this.setState({ state: window.sim.state });
    // this.animate();
    this.worker.postMessage('message');
    this.animationHandle = requestAnimationFrame(this.update);
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationHandle)
    this.worker.terminate();
  }

  

  

  render() {
    return null;
  }
}

export default DoublePendulumModel;