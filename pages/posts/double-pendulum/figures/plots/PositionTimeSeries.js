import React from "react";
import TimeSeries from './TimeSeries.js';
import DoublePendulumSimulationContext from '../../demos/double-pendulum-simulation-context.js'


export default class PositionTimeSeries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DoublePendulumSimulationContext.Consumer>
        { context => {
          if (!context.simulationState) {
            return <></>;
          }

          // let positions = context.simulationState.xy_positions;
          let states = context.simulationState.states.toArray();

          let positionSequences = this.props.transforms.map(t => states.flatMap(s => [s.time, t(s)]))
          // let positions = states.flatMap(s => [s.time, s.a.y])
          // let positions2 = states.flatMap(s => [s.time, s.a.x])

          return <TimeSeries positions={positionSequences}/>
        }}
      </DoublePendulumSimulationContext.Consumer>
    );
  }
}
