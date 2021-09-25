import React from 'react';
import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'

const svgPath = (points, command, i) => {
  const d = points.filter(p => p).reduce(
    (acc, point, i, a) => i === 0
      ? `M ${point[0]},${point[1]}`
      : `${acc} ${command(point, i, a)}`,
    ''
  )
  return (
    <path
      key={i}
      d={d}
      style={{ fill: "none", stroke: "black", strokeWidth: 0.1 }}
    />
  );
}
const lineCommand = point => `L ${point[0]} ${point[1]}`

export default class AnimatedTimeSeriesPlot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DoublePendulumSimulationContext.Consumer>
        {context => {
          const state = context;

          if (!state || !state.simulationState) {
            return (<></>);
          }

          const paths = this.props.toSequences(state)
            .map((s, i) => svgPath(
              s.values.map((v, i) => [(Math.max(0,s.capacity-s.values.length) +i) * 100 / s.capacity, 0.25 * v]),
              lineCommand,
              i
            ));

          return (
            <svg viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg" overflow="visible">
              <g transform="scale(1 -1) translate(0 -7.5)">
                {paths}
              </g>
            </svg>
          );
        }}
      </DoublePendulumSimulationContext.Consumer>
    )
  }
}
