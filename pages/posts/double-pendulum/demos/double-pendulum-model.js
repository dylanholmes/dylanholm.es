import CircularBuffer from 'mnemonist/circular-buffer';
import React from 'react';

import * as dp from './model2.js';

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
        theta: {a: Math.PI/2, b: Math.PI/2},
      }
    );
    this.state = {
      frameIndex: 0,
      currentState: initialState,
      states: CircularBuffer.from([], Array, 4),
      s: {
        a: Math.PI/2,
        b: Math.PI/2,
        da: 0,
        db: 0,
        dda: 0,
        ddb: 0
      }
    }
  }

  update(time) {
    this.stepSimulation(time);
    this.props.onChange(this.state);
  }

  stepSimulation(time) {
    this.lastTime = this.lastTime || time
    // const deltaTime = time - this.lastTime;
    const deltaTime = 1000/60; // make this thing deterministic...
    const deltaSeconds = deltaTime / 1000;
    const dt = 0.0001;
    const steps = Math.floor(deltaSeconds / dt);
    const desiredFrames = 2;
    const mod = Math.floor(steps / desiredFrames);

    this.setState((state) => {

      for (let t = 0; t < deltaSeconds; t += dt) {
        let currentState = state.currentState;
        currentState.time = this.lastTime + t*1000;
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
        if (state.frameIndex % mod == 0) {
          state.states.push(state.currentState);
        }
      }

      return state;
    });

    this.lastTime = time
  }

  randomVelocityWalkUpdate() {
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
