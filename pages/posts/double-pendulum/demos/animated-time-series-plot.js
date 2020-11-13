import React from 'react';
import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'

const svgPath = (points, command) => {
  const d = points.filter(p => p).reduce(
    (acc, point, i, a) => i === 0
      ? `M ${point[0]},${point[1]}`
      : `${acc} ${command(point, i, a)}`,
    ''
  )
  return <path
    d={d}
    style={{fill: "none", stroke: "black", strokeWidth: 0.1}} />
}
const lineCommand = point => `L ${point[0]} ${point[1]}`

export default class AnimatedTimeSeriesPlot extends React.Component {
  constructor(props) {
    super(props);

    this.nq = props.nq || 500;
    this.qi = 0;
    this.q = new Array(this.nq)
  }

  render() {
    return (
      <DoublePendulumSimulationContext.Consumer>
        {context => {
          const state = context;

          if (!state || !state.sim) {
            return (<></>);
          }

          const points = this.props.toPoints(state);
          this.q[this.qi++%this.nq] = points;
      
          let nq = this.nq;
          let q = this.q;
          let qi = this.qi;
      
          let paths = new Array(points.length);
          for (let j = 0; j < paths.length; ++j) {
            let points = new Array(nq);
            for (let i = 0; i < nq; ++i) {
              if (typeof q[(qi+i)%nq] !== 'undefined') {
                points[i] = [i*100/nq, 0.25*q[(qi+i)%nq][j]];
              } else {
                points[i] = null;
              }
            }
            paths[j] = svgPath(points, lineCommand);
          }
      
          return (
              <svg viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg" overflow="visible">
                <g transform="scale(1 -1) translate(0 -7.5)">
                  {paths[0]}
                  {paths[1]}
                  {paths[2]}
                  {paths[3]}
                </g>
              </svg>
          );
      }}
      </DoublePendulumSimulationContext.Consumer>
    )
  }
}