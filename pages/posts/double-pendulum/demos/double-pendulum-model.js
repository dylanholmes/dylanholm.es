import CircularBuffer from 'mnemonist/circular-buffer';
import React from 'react';

function clamp(x, min, max) {
  return Math.max(min, Math.min(x, max));
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function fix_range(x) {
  return mod(x + Math.PI, 2*Math.PI) - Math.PI;
}

export const withForwardKinematics = (state) => {
  const r = 1;
  const l = 15;
  const c_a = Math.cos(state.theta.a);
  const s_a = Math.sin(state.theta.a);
  const c_b = Math.cos(state.theta.b);
  const s_b = Math.sin(state.theta.b);
  const a = {
    x: l * s_a,
    y: -l * c_a,
    dx: c_a*l*state.dtheta.a,
    dy: s_a*l*state.dtheta.a,
    ddx: c_a*l*state.ddtheta.a - s_a*l*state.dtheta.a*state.dtheta.a,
    ddy: s_a*l*state.ddtheta.a + c_a*l*state.dtheta.a*state.dtheta.a,
  };
  const b = {
    x: l * Math.sin(state.theta.b) + a.x,
    y: -l * Math.cos(state.theta.b) + a.y,
    dx: c_b*l*state.dtheta.b + a.dx,
    dy: s_b*l*state.dtheta.b + a.dy,
    ddx: c_b*l*state.ddtheta.b - s_b*l*state.dtheta.b*state.dtheta.b + a.ddx,
    ddy: s_b*l*state.ddtheta.b + c_b*l*state.dtheta.b*state.dtheta.b + a.ddy,
  };

  return {...state, a, b};
}

export default class DoublePendulumModel extends React.Component {
  constructor(props) {
    super(props);
    let initialState = withForwardKinematics(
      {
        ddtheta: {a:0, b:0},
        dtheta: {a:0, b:0},
        theta: {a: Math.PI, b: Math.PI/2},
      }
    );
    this.state = {
      frameIndex: 0,
      currentState: initialState,
      xy_positions: [],
      // lowResStates: CircularBuffer.from([{...initialState}], Array, 500),
      // medResStates: CircularBuffer.from([{...initialState}], Array, 500),
      // highResStates: CircularBuffer.from([{...initialState}], Array, 500),
    }
  }

  update(time, elapsedSinceLastLoop) {
    this.updateState(time, elapsedSinceLastLoop);
    this.props.onChange(this.state);
  }

  updateState(time, elapsedSinceLastLoopMs) {
    this.lastTime = this.lastTime || time

    if (time < this.lastTime) {
      console.log("found one!", time, this.lastTime)
    }
    const deltaTime = time - this.lastTime;
    // console.log(deltaTime);
    //const dt = 0.00001;
    // const ddt = 1;
    // const frames = Math.round(elapsedSinceLastLoopMs / ddt);

    //elapsedSinceLastLoopMs = 0.01;

    const slowDownFactor = 1;
    const deltaSeconds = slowDownFactor * deltaTime / 1000;
    const dt = slowDownFactor * 0.001;
    const steps = Math.floor(deltaSeconds / dt);
    const desiredFrames = 2;
    const mod = Math.floor(steps / desiredFrames);

    // console.log(time/1000, deltaSeconds, dt, steps, mod);
    this.setState((state) => {
      const llastT = state.xy_positions[state.xy_positions.length-4];
      const llastY = state.xy_positions[state.xy_positions.length-3];
      const lastT = state.xy_positions[state.xy_positions.length-2];
      const lastY = state.xy_positions[state.xy_positions.length-1];
      state.xy_positions = [llastT, llastY, lastT, lastY];

      if (time < lastT) {
        console.log("found one!", time, lastT)
      }

      for (let t = 0; t < deltaSeconds; t += dt) {
        // let ttime = time + t;
        let currentState = state.currentState;
        const g = 9.8;
        const m_a = 1;
        const m_b = 1;
        const l_a = 1;
        const l_b = 1;

        const a = currentState.theta.a;
        const b = currentState.theta.b;
        const da = currentState.dtheta.a;
        const db = currentState.dtheta.b;

        const s_a = Math.sin(a);
        const s_b = Math.sin(b);
        const c_a = Math.cos(a);
        const s_ab = Math.sin(a-b);
        const c_ab = Math.cos(a-b);

        const da2 = da*da;
        const db2 = db*db;
        const dda =
          (
            m_b*s_ab*c_ab*l_a*da2
            +m_b*s_ab*l_b*db2
            +((m_a+m_b)*s_a-m_b*s_b*c_ab)*g
          ) / (
            -(m_a + m_b*s_ab*s_ab)*l_a
          );
        const ddb =
          (
            (m_a + m_b)*s_ab*l_a*da2
            +m_b*s_ab*c_ab*l_b*db2
            +(m_a+m_b)*s_ab*c_a*g
          ) / (
            (m_a + m_b*s_ab*s_ab)*l_b
          );

        currentState.ddtheta = {
          a: dda,
          b: ddb,
        };
        currentState.dtheta = {
          a: da + dda * dt,
          b: db + ddb * dt,
        };
        currentState.theta = {
          a: fix_range(a + da * dt),
          b: fix_range(b + db * dt),
        };

        if (Math.abs(currentState.theta.a) > Math.PI) {
          currentState.theta.a = (currentState.theta.a+Math.PI) % 2*Math.PI - Math.PI;
        }

        if (Math.abs(currentState.theta.b) > Math.PI) {
          currentState.theta.b = (currentState.theta.b+Math.PI) % 2*Math.PI - Math.PI;
        }

        state.currentState = withForwardKinematics(currentState);

        state.frameIndex++;
        if (state.frameIndex % mod == 0 && !Number.isNaN(currentState.theta.y)) {
          state.xy_positions.push(this.lastTime + t*1000/slowDownFactor);
          state.xy_positions.push(currentState.a.y);
        }


        // state.highResStates.push({...state.currentState});
        // if (state.frameIndex % 30 == 0) {
        //   state.medResStates.push({...state.currentState});
        // }
        // if (state.frameIndex % 300 == 0) {
        //   state.lowResStates.push({...state.currentState});
        // }
      }

      //console.log(state.xy_positions[0], state.xy_positions[state.xy_positions.length-2]);

      this.lastTime = time

      return state;
    });
  }

  randomVelocityWalkUpdate() {
    const deltaTime = 0.1;
    this.setState((state) => {
      const ddtheta = {
        a: 0.01*(2*Math.random(-1, 1)-1)**3,
        b: 0.01*(2*Math.random(-1, 1)-1)**3
      };
      const newState = {
        dtheta: {
          a: clamp(state.dtheta.a + ddtheta.a, -0.05, 0.05),
          b: clamp(state.dtheta.b + ddtheta.b, -0.05, 0.05),
        },
        theta: {
          a: state.theta.a + state.dtheta.a,
          b: state.theta.b + state.dtheta.b
        }
      };

      this.context.setSim(newState);

      return newState;
    });
  }


  render() {
    return null;
  }
}
