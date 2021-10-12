import React from 'react';
import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'
import OnScreen from '../OnScreen.js'

export default function DoublePendulumViewerPlain(props) {
  const state = React.useContext(DoublePendulumSimulationContext);

  if (!state || !state.simulationState) {
    return null;
  }

  const r = 1;
  const x_a = state.simulationState.currentState.a.x;
  const y_a = state.simulationState.currentState.a.y;
  const x_b = state.simulationState.currentState.b.x;
  const y_b = state.simulationState.currentState.b.y;

  const black = 'black';
  const color = black;
  const fill = color;
  const stroke = color;

  const lineStyle = {stroke, strokeWidth: 0.25};
  const pointStyle = {fill};

  const style = {display: "block", height: "600px", border: "1px solid", width: "100%"};

  return (
    <OnScreen style={style}>
      <svg style={style} viewBox="0 0 100 62" xmlns="http://www.w3.org/2000/svg" overflow="visible">
        <g transform="scale(1 -1) translate(45 -30)">
          <line name="line-o-a" x1={0} y1={0} x2={x_a} y2={y_a} style={lineStyle}/>
          <line name="line-a-b" x1={x_a} y1={y_a} x2={x_b} y2={y_b} style={lineStyle}/>
          <circle name="point-o" cx={0} cy={0} r={r} style={pointStyle}/>
          <circle name="point-a" cx={x_a} cy={y_a} r={r} style={pointStyle}/>
          <circle name="point-b" cx={x_b} cy={y_b} r={r} style={pointStyle}/>
        </g>
      </svg>
    </OnScreen>
  );
}
