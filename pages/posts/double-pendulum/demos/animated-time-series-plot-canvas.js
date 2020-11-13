import React from 'react';
import DoublePendulumSimulationContext from './double-pendulum-simulation-context.js'

const canvasPath = (ctx, points) => {
  points.filter(p => p)
    .map(p => [ctx.canvas.width*p[0],ctx.canvas.height*p[1]])
    .forEach((point, i, a) => {
      if (i === 0) {
        ctx.fillStyle = 'none';
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = '#000000';
        ctx.beginPath();
        ctx.moveTo(point[0], point[1]);
      } else if (i === a.length-1) {
        ctx.stroke();
      } else {
        ctx.lineTo(point[0], point[1]);
      }
    }
  )
}

export default class AnimatedTimeSeriesPlot2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <DoublePendulumSimulationContext.Consumer>
        {context => {
          const state = context;

          if (!state || !state.sim) {
            return (<></>);
          }

          const ss = this.props.toSequences(state)
          
          const draw = ctx => ss.map(
            s => canvasPath(
              ctx,
              s.values.map(
                (v, i) =>
                [
                  (Math.max(0,s.capacity-s.values.length) +i) * 1.0 / s.capacity,
                  v
                ]
              )
            )
          );

          let angle = state.sim.currentState.theta.a;

          return <Canvas angle={angle} command={draw} />;
        }}
      </DoublePendulumSimulationContext.Consumer>
    )
  }
}

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.saveContext = this.saveContext.bind(this);
  }
  
  saveContext(ctx) {
    this.ctx = ctx;
  }
  
  componentDidUpdate() {
    let dpi = window.devicePixelRatio;

    const {angle, command} = this.props;
    
    const cw = this.ctx.canvas.width;
    const ch = this.ctx.canvas.height;
    const side = ch;
    this.ctx.save();

    // y-axis: from -cw (bottom) to 1 (top)
    // x-axis: from 0 (left) to 1 (left)
    // this.ctx.scale(dpi/2, dpi/2);
    this.ctx.scale(1,-1);
    this.ctx.translate(0, -ch/2);
    
    // Draw shit.
    // this.ctx.beginPath();
    // this.ctx.clearRect(-cw/2, -ch/2, cw, ch);
    this.ctx.clearRect(0,-ch/2,cw, ch);

    
    // this.ctx.strokeRect(0,-ch/2,cw, ch);

    // // this.ctx.fillStyle = '#FF0000';
    // // this.ctx.fillRect(
    // //   -canvasWidth/2+10, -canvasHeight/2+10, canvasWidth-20, canvasHeight-20);

    // this.ctx.fillStyle = '#FF0000';
    // this.ctx.fillRect(0.1, 0.1, 0.8, 0.2);

    // this.ctx.scale(1.0/cw, 1);
    
    // // this.ctx.scale(cw, 1);

    // this.ctx.rotate(angle);
    // this.ctx.fillStyle = '#4397AC';
    // this.ctx.fillRect(-side/2, -side/2, side, side);
    // this.ctx.rotate(-angle);

    
    command(this.ctx);

    this.ctx.restore();
  }
  
  render() {
    return <PureCanvas contextRef={this.saveContext}></PureCanvas>;
  }
}


class PureCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  shouldComponentUpdate() { return false; }

  componentDidMount() {

    let canvas = this.canvasRef.current;
    let context = canvas.getContext('2d');

    this.props.contextRef(context);
    

    //get DPI
    let dpi = window.devicePixelRatio;
    //get context
    
    function fix_dpi() {
      //get CSS height
      //the + prefix casts it to an integer
      //the slice method gets rid of "px"
      let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
      //get CSS width
      let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
      //scale the canvas
      canvas.setAttribute('height', style_height * dpi);
      canvas.setAttribute('width', style_width * dpi);
    }
    

    fix_dpi();

  }
  
  render() {
    return (
      <canvas ref={this.canvasRef} style={{width:"100%",height:100}} />
    )
  }
}
