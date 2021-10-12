import React from "react";
import TimeSeriesCanvas from './TimeSeriesCanvas.js';
import TimeSeriesSvg from './TimeSeriesSvg.js';
import DoublePendulumSimulationContext from '../../demos/double-pendulum-simulation-context.js'
import OnScreen from "../../OnScreen.js";

export default class SimulationTimeSeriesPlot extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <OnScreen style={{display:"block", height: "100px"}}>
        <DoublePendulumSimulationContext.Consumer >
          { context => {
            if (!context.simulationState) {
              return <></>;
            }

            let time = context.simulationState.currentState.time;
            let states = context.simulationState.states.toArray();

            const xMin = this.props.xMin(time);
            const xMax = this.props.xMax(time);
            const yMin = this.props.yMin(time);
            const yMax = this.props.yMax(time);
            let positionSequences = this.props.transforms.map(t => states.flatMap(s => [s.time, t(s)]))

            const useCanvas = true;
            if (useCanvas) {
              return <TimeSeriesCanvas 
                xMin={xMin}
                xMax={xMax}
                yMin={yMin}
                yMax={yMax}
                positionSequences={positionSequences}
              />
            } else {
              return <TimeSeriesSvg
                xMin={xMin}
                xMax={xMax}
                yMin={yMin}
                yMax={yMax}
                positionSequences={positionSequences}
              />
            }
          }}
        </DoublePendulumSimulationContext.Consumer>
      </OnScreen>
    );
  }
}
