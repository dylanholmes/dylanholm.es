import React from 'react';

import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'

import Worker from './example.worker';

class DoublePendulumModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.onWorkerMessage = this.onWorkerMessage.bind(this);
  }

  componentDidMount() {
    this.worker = new Worker();
    // this.worker.postMessage('from Host');
    this.worker.addEventListener('message', this.onWorkerMessage);
  }
  componentWillUnmount() {
    this.worker.terminate();
  }

  onWorkerMessage(event) {
    // console.log('Host received:', event.data);

    this.state = event.data;
    // console.log(this.state);
  }

  update(elapsedSinceLastLoop) {
    this.simUpdate(elapsedSinceLastLoop);
  }

  simUpdate(elapsedSinceLastLoopMs) {
    // console.log(this.state);
    let s = this.state;
    this.setState((state) => {
      state = s;
      this.worker.postMessage(elapsedSinceLastLoopMs);
      this.context.setSim(state);
      return state;
    });
  }

  render() {
    return null;
  }
}
DoublePendulumModel.contextType = DoublePendulumSimulationContext

export default DoublePendulumModel;