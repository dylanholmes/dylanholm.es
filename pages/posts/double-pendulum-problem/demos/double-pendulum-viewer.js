import React from 'react';
import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'
import OnScreen from '../OnScreen.js'

import katex from 'katex';

function polarToCartesian(centerX, centerY, radius, angleInRadians) {
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";
    if (endAngle - startAngle <= -Math.PI) {
      largeArcFlag = "1";
    }
    var sweepFlag = endAngle - startAngle >= 0 ? 0 : 1;

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, sweepFlag, end.x, end.y
    ].join(" ");

    return d;
}

var math = (x) => katex.renderToString(x, {
  displayMode: false,
  throwOnError: true,
  output: 'html'
});

var foreignObjectMath = (x, y, text) => (<foreignObject x={x} y={y} width="200" height="200" dangerouslySetInnerHTML={{__html: math(text)}}></foreignObject>)

const var_theta_a = foreignObjectMath(-5, 0, "\\theta_a");
const var_theta_b = foreignObjectMath(-5, -20, "\\theta_b");

const var_pi = foreignObjectMath(-5, -20, "\\pi");

// const var_l = math("l");
const var_a = foreignObjectMath(5, 0, "a");
const var_b = foreignObjectMath(5, 0, "b");
const var_o = foreignObjectMath(5, 0, "o");

const var_g = foreignObjectMath(0, 0, "g");
const var_left_arrow = foreignObjectMath(0, 0, "\\longleftarrow");

const var_x = foreignObjectMath(0, 0, "x");
const var_y = foreignObjectMath(0, 0, "y");

function clamp(x, min, max) {
  return Math.max(min, Math.min(x, max));
}

export default function DoublePendulumViewer(props) {
  const state = React.useContext(DoublePendulumSimulationContext);
  if (!state || !state.simulationState) {
    return (<></>);
  }


  let theta_a = state.simulationState.currentState.theta.a;
  let theta_b = state.simulationState.currentState.theta.b;

  const theta_a_arc_start = 3*Math.PI/2+theta_a;
  const theta_a_arc_end = 3*Math.PI/2;
  const theta_b_arc_start = 3*Math.PI/2+theta_b;
  const theta_b_arc_end = 3*Math.PI/2;

  const r = 1;
  const l = 15;
  const x_a = state.simulationState.currentState.a.x;
  const y_a = state.simulationState.currentState.a.y;
  const x_b = state.simulationState.currentState.b.x;
  const y_b = state.simulationState.currentState.b.y;

  const black = 'black';
  const color = black;
  const fill = color;
  const stroke = color;

  const dashedStrokeWidth = 0.1;
  const strokeDasharray = 0.4;
  const verticalLineStyle = {stroke, strokeWidth: dashedStrokeWidth, strokeDasharray};
  const axisLineStyle = {stroke, strokeWidth: dashedStrokeWidth};
  const arcStyle = {fill: "none", stroke, strokeWidth:dashedStrokeWidth, strokeDasharray};
  const lineStyle = {stroke, strokeWidth: 0.25};
  const pointStyle = {fill};

  const var_theta_a_rot = (180*theta_a/Math.PI) / 2;
  const var_theta_b_rot = (180*theta_b/Math.PI ) / 2;

  const vvv = ""//foreignObjectMath(-5, -20, `t = ${t.toFixed(1)}, mode = ${mode}`);
  const pa = (theta_a >=0) ? "\\hphantom{-}" : "";
  const pb = (theta_b >=0) ? "\\hphantom{-}" : ""
  const theta_a_legend = foreignObjectMath(-5, -20, `\\theta_a = ${pa}${theta_a.toFixed(1)}\\pi`);
  const theta_b_legend = foreignObjectMath(-5, -20, `\\theta_b = ${pb}${theta_b.toFixed(1)}\\pi`);

  const viewBoxWidth = 100;
  const viewBoxHeight = 10;
  const style = {display: "block", height: "350px", width: "100%"};

  return (
    <OnScreen style={style}>
      <svg style={style} viewBox={`0 0 100 ${viewBoxHeight}`} xmlns="http://www.w3.org/2000/svg" overflow="visible">
        <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="10" markerHeight="10"
            orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>

        <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="5" markerHeight="5">
          <circle cx="5" cy="5" r="5" fill="red" />
        </marker>
      </defs>

        <g transform={`scale(1 -1) translate(45 0)`}>

          {/* <g transform="translate(-44 3)">
          <line x1={0} y1={0} x2={10} y2={0} style={axisLineStyle}  markerEnd="url(#arrow)" />
          <g name="g-arrow" transform={`translate(${7} ${-3}) scale(0.15) scale(1 -1)`}>
              <g name="g-arrow" transform={`translate(${25}, ${-34})`}>{var_x}</g>
            </g>
          <line x1={0} y1={0} x2={0} y2={10} style={axisLineStyle}  markerEnd="url(#arrow)" />
          <g name="g-arrow" transform={`translate(${-4.5} ${9.5}) scale(0.15) scale(1 -1)`}>
              <g name="g-arrow" transform={`translate(${25}, ${-34})`}>{var_y}</g>
            </g>
          </g> */}

          <line name="vertical-line-a" x1={0} y1={0} x2={0} y2={-l} style={verticalLineStyle}/>
          <line name="vertical-line-b" x1={x_a} y1={y_a} x2={x_a} y2={y_a-l} style={verticalLineStyle}/>
          <path name="arc-a" d={describeArc(0, 0, l/2, theta_a_arc_start, theta_a_arc_end)} style={arcStyle} />
          <path name="arc-b" d={describeArc(x_a, y_a, l/2, theta_b_arc_start, theta_b_arc_end)} style={arcStyle} />
          <line name="line-o-a" x1={0} y1={0} x2={x_a} y2={y_a} style={lineStyle}/>
          <line name="line-a-b" x1={x_a} y1={y_a} x2={x_b} y2={y_b} style={lineStyle}/>
          <circle name="point-o" cx={0} cy={0} r={r} style={pointStyle}/>
          <circle name="point-a" cx={x_a} cy={y_a} r={r} style={pointStyle}/>
          <circle name="point-b" cx={x_b} cy={y_b} r={r} style={pointStyle}/>
          <g name="var-theta-a" transform={`
            rotate(${var_theta_a_rot}) translate(0 ${-1.4*l/2})
            scale(0.15) scale(1 -1)`}>
            <g transform={`
              rotate(${var_theta_a_rot})
              translate(-5 -12)`}>{var_theta_a}</g>
          </g>
          <g name="var-theta-b" transform={`
            translate(${x_a} ${y_a})
            rotate(${var_theta_b_rot}) translate(0 ${-1.4*l/2})
            scale(0.15) scale(1 -1)`}>
            <g transform={`
              rotate(${var_theta_b_rot})
              translate(0 0)`}>{var_theta_b}</g>
          </g>
          <g name="var-a" transform={`translate(${x_a} ${y_a}) scale(0.15) scale(1 -1)`}>{var_a}</g>
          <g name="var-b" transform={`translate(${x_b} ${y_b}) scale(0.15) scale(1 -1)`}>{var_b}</g>
          <g name="var-o" transform={`translate(${0} ${0}) scale(0.15) scale(1 -1)`}>{var_o}</g>

          <g name="g-arrow" transform={`translate(${-41} ${-10}) scale(0.15) scale(1 -1)`}>
            <g name="g-arrow" transform={`translate(${-20}, ${-214})`}>{vvv}</g>
            <g name="g-arrow" transform={`translate(${-20}, ${-184})`}>{theta_a_legend}</g>
            <g name="g-arrow" transform={`translate(${-20}, ${-154})`}>{theta_b_legend}</g>
          </g>

          {/* <g name="g-arrow" transform={`translate(${37} ${0}) scale(0.15) scale(1 -1)`}>
            <g name="g-arrow" transform={`translate(${25}, ${-34})`}>{var_g}</g>
            <g name="g-arrow" transform={`rotate(${-90})`}>{var_left_arrow}</g>
          </g> */}
        </g>
      </svg>
      </OnScreen>
  );
}
