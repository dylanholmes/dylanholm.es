import React from "react";
import TimeSeriesCanvas from './TimeSeriesCanvas.js';
import TimeSeriesSvg from './TimeSeriesSvg.js';
import DoublePendulumSimulationContext from '../../demos/double-pendulum-simulation-context.js'
import OnScreen from "../../OnScreen.js";

export default class SimulationPlot extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const defaultStyle = {
      display: "block",
      height: "100px"
    };

    return (
      <OnScreen style={{...defaultStyle, ...this.props.style}}>
        <DoublePendulumSimulationContext.Consumer >
          { context => {
            if (!context.simulationState) {
              return <></>;
            }

            let currentState = context.simulationState.currentState;
            let states = context.simulationState.states.toArray();

            const xMin = this.props.xMin(currentState);
            const xMax = this.props.xMax(currentState);
            const yMin = this.props.yMin(currentState);
            const yMax = this.props.yMax(currentState);
            const maxSegments = this.props.maxSegments;
            let sequences = this.props.transforms.map(transform => states.flatMap(s => transform(s)))

            const useCanvas = true;
            if (useCanvas) {
              return <TimeSeriesCanvas 
                style={{...defaultStyle, ...this.props.style}}
                xMin={xMin}
                xMax={xMax}
                yMin={yMin}
                yMax={yMax}
                maxSegments={maxSegments}
                positionSequences={sequences}
              />
            } else {
              return <TimeSeriesSvg
                xMin={xMin}
                xMax={xMax}
                yMin={yMin}
                yMax={yMax}
                positionSequences={sequences}
              />
            }
          }}
        </DoublePendulumSimulationContext.Consumer>
      </OnScreen>
    );
  }
}
