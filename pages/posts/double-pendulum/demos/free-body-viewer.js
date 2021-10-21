import React from 'react';
import katex from 'katex';
import OnScreen from '../OnScreen.js'


import SimulationContext from './double-pendulum-simulation-context.js'

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

const var_theta_a = foreignObjectMath(-15, 0, "-\\theta_a");
const var_neg_theta_b = foreignObjectMath(-15, 0, "-\\theta_b");
const var_theta_b = foreignObjectMath(-15, -20, "\\theta_b");

const var_pi = foreignObjectMath(-5, -20, "\\pi");

// const var_l = math("l");
const var_a = foreignObjectMath(5, 0, "a");
const var_b = foreignObjectMath(5, 0, "b");
const var_o = foreignObjectMath(5, 0, "o");

const var_g = foreignObjectMath(0, 0, "g");
const var_Ta = foreignObjectMath(0, 0, "T_a");
const var_Tb = foreignObjectMath(0, 0, "T_b");
const var_nTb = foreignObjectMath(0, 0, "-T_b");
const var_left_arrow = foreignObjectMath(0, 0, "\\longleftarrow");

function clamp(x, min, max) {
  return Math.max(min, Math.min(x, max));
}

export default function FreeBodyViewer(props) {
  const context = React.useContext(SimulationContext);
  if (!context) {
    return null;
  }
  
  if (!context.simulationState) {
    return null;
  }

  const state = context.simulationState.currentState;
  if (!state) {
    return null;
  }

  let theta_a = state.theta.a;
  let theta_b = state.theta.b;

  // theta range 0 to pi 
  theta_a %= 2*Math.PI;
  theta_b %= 2*Math.PI;
  if (theta_a < 0) theta_a += 2*Math.PI;
  if (theta_b < 0) theta_b += 2*Math.PI;

  // for theta range -pi to pi
  theta_a -= Math.PI;
  theta_b -= Math.PI;

  const theta_a_arc_start = 3*Math.PI/2+theta_a;
  const theta_a_arc_end = 3*Math.PI/2;
  const theta_b_arc_start = 3*Math.PI/2+theta_b;
  const theta_b_arc_end = 3*Math.PI/2;

  // // for theta range -pi to pi 
  // const theta_a_arc_start = 3*Math.PI/2+theta_a;
  // const theta_a_arc_end = 3*Math.PI/2;
  // const theta_b_arc_start = 3*Math.PI/2+theta_b;
  // const theta_b_arc_end = 3*Math.PI/2;

  // const mode = Math.floor(t) % 10;

  // let theta_a = 0;
  // let theta_b = 0;
  // if (mode < 8) {
  //   t /= 8;
  //   const mx = 2*Math.PI ;
  //   t = mx * t % mx;
  //   theta_a += (t) % (2*Math.PI);
  //   theta_b += (t) % (2*Math.PI);
  // }

  const r = 1;
  const l = 15;
  let x_o = 0;
  let y_o = 0;
  let x_a = l * Math.sin(theta_a);
  let y_a = -l * Math.cos(theta_a);
  let x_b = l * Math.sin(theta_b) + x_a;
  let y_b = -l * Math.cos(theta_b) + y_a;

  // const h = 256 *(0.5 + 0.5*Math.sin(time/0.5));
  // const rainbow = `hsl(${h}, 50%, 70%)`;
  const black = 'black';
  const color = black;
  const fill = color;
  const stroke = color;

  const dashedStrokeWidth = 0.1;
  const strokeDasharray = 0.4;
  const verticalLineStyle = {stroke, strokeWidth: dashedStrokeWidth, strokeDasharray};
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

  const fa = {x: -25, y: 0};
  const fb = {x: 25, y: 0};

  const o = {x: 0, y: 0};
  const a = {x: x_a, y: y_a};
  const b = {x: x_b, y: y_b};

  const length = (p) => Math.sqrt(p.x*p.x + p.y*p.y);
  const normalized = (p) => multiply(1/length(ab), ab);
  const multiply = (a, p) => {return{ x: a*p.x, y:a*p.y}};
  const add = (p, q) => {return{ x: p.x+q.x, y:p.y+q.y}};
  const subtract = (p, q) => {return{ x: p.x-q.x, y:p.y-q.y}};

  const ab = subtract(a,b);
  const ab_4 = multiply(0.6, ab);
  const oa = subtract(o,a);
  const oa_4 = multiply(0.6, oa);

  x_a = fa.x;
  y_a = fa.y;
  x_b = fb.x;
  y_b = fb.y;

  // const style = {display: "block", height: "600px", border: "1px solid", width: "100%"};
  const viewBoxWidth = 100;
  const viewBoxHeight = 10;
  const style = {display: "block", height: "300px", width: "100%"};

  return (
    <OnScreen style={style} >
      <svg style={style} viewBox={`0 0 100 ${viewBoxHeight}`} xmlns="http://www.w3.org/2000/svg" overflow="visible">
        <defs>
        <marker id="fb-arrow" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>

        <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="5" markerHeight="5">
          <circle cx="5" cy="5" r="5" fill="red" />
        </marker>
      </defs>
        <g transform="scale(1 -1) translate(45 -7)">
          <line name="vertical-line-a" x1={x_a} y1={y_a+l} x2={x_a} y2={y_a-l} style={verticalLineStyle}/>
          <line name="vertical-line-b" x1={x_b} y1={y_b+l} x2={x_b} y2={y_b-l} style={verticalLineStyle}/>
          <path name="arc-a" d={describeArc(x_a, y_a, l/2, theta_a_arc_start-Math.PI, theta_a_arc_end-Math.PI)} style={arcStyle} />
          <path name="arc-b" d={describeArc(x_b, y_b, l/2, theta_b_arc_start-Math.PI, theta_b_arc_end-Math.PI)} style={arcStyle} />
          <path name="arc-b" d={describeArc(x_a, y_a, l*.4, theta_b_arc_start, theta_b_arc_end)} style={arcStyle} />

          <line name="line-a-o" x1={x_a} y1={y_a} x2={x_a+oa_4.x} y2={y_a+oa_4.y} style={lineStyle} markerEnd="url(#fb-arrow)" />
          <g name="g-arrow" transform={`translate(${x_a+1.5*oa_4.x} ${y_a+1.5*oa_4.y}) scale(0.15) scale(1 -1)`}>
            <g name="g-arrow" transform={`translate(-10, -12)`}>{var_Ta}</g>
          </g>

          <line name="line-a-b" x1={x_a} y1={y_a} x2={x_a-ab_4.x} y2={y_a-ab_4.y} style={lineStyle} markerEnd="url(#fb-arrow)"/>
          <g name="g-arrow" transform={`translate(${x_a-1.5*ab_4.x} ${y_a-1.5*ab_4.y}) scale(0.15) scale(1 -1)`}>
            <g name="g-arrow" transform={`translate(-10, -12)`}>{var_nTb}</g>
          </g>

          <line name="line-a-b" x1={x_b+ab_4.x} y1={y_b+ab_4.y} x2={x_b} y2={y_b} style={lineStyle} markerStart="url(#fb-arrow)"/>
          <g name="g-arrow" transform={`translate(${x_b+1.5*ab_4.x} ${y_b+1.5*ab_4.y}) scale(0.15) scale(1 -1)`}>
            <g name="g-arrow" transform={`translate(-10, -12)`}>{var_Tb}</g>
          </g>

          <line name="line-a-g" x1={x_a+0} y1={y_a-10} x2={x_a} y2={y_a} style={lineStyle} markerStart="url(#fb-arrow)"/>
          <g name="g-arrow" transform={`translate(${x_a} ${y_a-10}) scale(0.15) scale(1 -1)`}>
            <g name="g-arrow" transform={`translate(5, -5)`}>{var_g}</g>
          </g>
          
          <line name="line-b-g" x1={x_b+0} y1={y_b-10} x2={x_b} y2={y_b} style={lineStyle} markerStart="url(#fb-arrow)"/>
          <g name="g-arrow" transform={`translate(${x_b} ${y_b-10}) scale(0.15) scale(1 -1)`}>
            <g name="g-arrow" transform={`translate(5, -5)`}>{var_g}</g>
          </g>
          
          <circle name="point-a" cx={x_a} cy={y_a} r={r} style={pointStyle}/>
          <circle name="point-b" cx={x_b} cy={y_b} r={r} style={pointStyle}/>
          <g name="var-theta-a" transform={`
            translate(${x_a} ${y_a})
            rotate(${var_theta_a_rot}) translate(0 ${1.4*l/2})
            scale(0.15) scale(1 -1)`}>
            <g transform={`
              rotate(${var_theta_a_rot})
              translate(-5 -12)`}>{var_theta_a}</g>
          </g>
          <g name="var-theta-b" transform={`
            translate(${x_b} ${y_b})
            rotate(${var_theta_b_rot}) translate(0 ${1.4*l/2})
            scale(0.15) scale(1 -1)`}>
            <g transform={`
              rotate(${var_theta_b_rot})
              translate(0 0)`}>{var_neg_theta_b}</g>
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
          
          <g name="g-arrow" transform={`translate(${-38} ${-5}) scale(0.15) scale(1 -1)`}>
            <g name="g-arrow" transform={`translate(${-20}, ${-214})`}>{vvv}</g>
            <g name="g-arrow" transform={`translate(${-20}, ${-184})`}>{theta_a_legend}</g>
            <g name="g-arrow" transform={`translate(${-20}, ${-154})`}>{theta_b_legend}</g>
          </g>  
          
          {/*
          <g name="g-arrow" transform={`translate(${37} ${0}) scale(0.15) scale(1 -1)`}>
            <g name="g-arrow" transform={`translate(${25}, ${-34})`}>{var_g}</g>
            <g name="g-arrow" transform={`rotate(${-90})`}>{var_left_arrow}</g>
          </g>
          */}
        </g>
      </svg>
    </OnScreen>
  );
}