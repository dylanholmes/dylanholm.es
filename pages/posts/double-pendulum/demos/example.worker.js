// import CircularBuffer from 'mnemonist/circular-buffer';

function clamp(x, min, max) {
  return Math.max(min, Math.min(x, max));
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function fix_range(x) {
  return mod(x + Math.PI, 2*Math.PI) - Math.PI;
}

function withForwardKinematics(state) {
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
  const b ={
    x: l * Math.sin(state.theta.b) + a.x,
    y: -l * Math.cos(state.theta.b) + a.y,
    dx: c_b*l*state.dtheta.b + a.dx,
    dy: s_b*l*state.dtheta.b + a.dy,
    ddx: c_b*l*state.ddtheta.b - s_b*l*state.dtheta.b*state.dtheta.b + a.ddx,
    ddy: s_b*l*state.ddtheta.b + c_b*l*state.dtheta.b*state.dtheta.b + a.ddy,
  };

  return {...state, a, b};
}

function step(state, dt) {
  const g = 9.8;
  const m_a = 1;
  const m_b = 1;
  const l_a = 1;
  const l_b = 1;

  const a = state.theta.a;
  const b = state.theta.b;
  const da = state.dtheta.a;
  const db = state.dtheta.b;

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

  state.ddtheta = {
    a: dda,
    b: ddb,
  };
  state.dtheta = {
    a: da + dda * dt,
    b: db + ddb * dt,
  };
  state.theta = {
    a: fix_range(a + da * dt),
    b: fix_range(b + db * dt),
  };

  if (Math.abs(state.theta.a) > Math.PI) {
    state.theta.a = (state.theta.a+Math.PI) % 2*Math.PI - Math.PI;
  }

  if (Math.abs(state.theta.b) > Math.PI) {
    state.theta.b = (state.theta.b+Math.PI) % 2*Math.PI - Math.PI;
  }

  return withForwardKinematics(state);
}

function batch_step(state, dt, buffer) {
  for (let i = 0; i < buffer.length; ++i) {
    buffer[i] = step(state, dt);
  }
}

class DoublePendulumModel {
  constructor() {
    this.update = this.update.bind(this);
    this.dt = 0.0001;
    this.nb = 100;
    this.batch = new Array(this.nb);
    this.batch[this.nb-1] = withForwardKinematics(
      {
        ddtheta: {a:0, b:0},
        dtheta: {a:0, b:0},
        theta: {a: Math.PI, b: Math.PI/2},
      }
    );
    this.update();
  }

  update() {
    batch_step(this.batch[this.nb-1], this.dt, this.batch);
  }
}

let doublePendulum = new DoublePendulumModel();

// setInterval(function bar(){ 
//   doublePendulum.workerUpdate(0.001, 16);
// }, 16);

// setInterval(function foo(){ 
//   self.postMessage({
//     currentState: doublePendulum.state.currentState,
//     // lowResStates: doublePendulum.state.lowRes,
//     // medResStates: doublePendulum.state.medResStates.toArray(),
//     // highResStates: doublePendulum.state.highResStates.toArray()
//   });
// }, 16);


self.addEventListener('message', function foo(event) {
  // console.log('Worker received:', event.data);
  // doublePendulum.update(event.data);
  

  self.postMessage(doublePendulum.batch);

  doublePendulum.update();
});


// self.postMessage(`from Worker 1 ${doublePendulum.state.currentState.theta.a}`);
// for (let i = 0; i < 100; ++i) {
//   doublePendulum.update(0.01);
// }
