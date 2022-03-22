// interface Model {
//   g: number,   // gravity in meters per second
//   ma: number,  // mass of point mass a in kilograms
//   mb: number,  // mass of point mass b in kilograms
//   la: number,  // length of link from origin to point mass a in meters
//   lb: number,  // length of link from point mass a to point mass b in meters
// }

// interface State {
//   a: number,   // theta a in radians, normalized to [-pi, pi)
//   b: number,   // theta b in radians, normalized to [-pi, pi)
//   da: number,  // angular velocity of theta a in rad/s
//   db: number,  // angular velocity of theta b in rad/s
// }

// interface Acceleration {
//   dda: number,
//   ddb: number
// }

export function computeAcceleration(s) {
  const { g, ma, mb, la, lb } = m;
  const { a, b, da, db } = s;

  // Precompute common terms
  const sa = Math.sin(a);
  const sb = Math.sin(b);
  const ca = Math.cos(a);
  const sab = Math.sin(a-b);
  const cab = Math.cos(a-b);
  const denom = ma + mb*sab*sab;

  // Compute the second time derivativee of theta a and b (angular acceleration),
  // using the equations of motion for the current state.
  return {
    dda:
      (
        mb*sab*cab*la*da*da
        + mb*sab*lb*db*db
        + ((ma + mb)*sa - mb*sb*cab)*g
      ) / (
        -denom*la
      ),
    ddb:
      (
        (ma + mb)*sab*la*da*da
        + mb*sab*cab*lb*db*db
        + (ma + mb)*sab*ca*g
      ) / (
        denom*lb
      )
  };
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

/**
 * (-inf, inf) => [-pi, pi)
 */
export function normalizeRadians(x) {
  return mod(x + Math.PI, 2*Math.PI) - Math.PI;
}

/**
 *
 * h - step size
 */
export function eulerMethod(y, dy, h) {
  return y + h * dy
}

export function stepSimulation(m, s) {
  let { a, b, da, db } = s;
  let { dda, ddb } = computeAcceleration(s);
  let h = 0.1;

  return {
    a: normalizeRadians(eulerMethod(a, da, h)),
    b: normalizeRadians(eulerMethod(b, db, h)),
    da: eulerMethod(da, dda, h),
    db: eulerMethod(db, ddb, h),
  };
}
