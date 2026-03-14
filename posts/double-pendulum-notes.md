# double pendulum — notes

companion doc for the post at `posts/double-pendulum.html`. the post itself is just the
interactive simulation with equations. these notes are everything else.

---

## 1. about the post

a chaotic double pendulum simulation running on a full-page canvas behind the page content.
the pendulum swings in the center, and time series of the joint angles, velocities, and
accelerations scroll across the screen. live KaTeX values update on the right side showing
the current state.

## 2. history

this started as a physics writeup — i wanted to derive the equations of motion for a double
pendulum from scratch, both from Newton's second law and eventually from the Lagrangian. the
original version was a pretty thorough derivation with all the algebra written out step by step.

the interactive part was an SVG animation. the original version didn't even use real physics —
it just applied random angular velocities to make the pendulum move around. looked fine for
illustrating the system but wasn't a real simulation.

later i made an "enhanced" version that had a proper physics engine (`enhanced-pendulum-physics.js`)
with actual numerical integration of the equations of motion. that version also had SVG-based
time series plots for positions, velocities, and accelerations. the SVG approach was cool
because you could use markers, dashes, arc annotations — it looked like a scientific diagram.
but SVG performance gets bad when you're updating many elements every frame, and i kept wanting
to add more visual elements which made it worse.

went through several iterations trying to get the SVG animations to match what i wanted. there's
a backup file and multiple fix commits in the git history from this. wasn't super directed —
lots of messing around.

### original version

- SVG-based animation with random motion (not real physics)
- full derivation: kinematics (positions, velocities, accelerations)
- newtonian dynamics with free body diagrams
- detailed appendix showing all the algebra to solve for angular accelerations
- learnings section about choosing generalized coordinates
- references to diego assencio, wolfram, myphysicslab, wikipedia

### enhanced version

- proper physics simulation via `enhanced-pendulum-physics.js`
- Euler integration at 60fps
- circular buffers storing state history at multiple resolutions
- SVG time series plots for accelerations
- expanded content: taxonomy of classical mechanics, timeline (1687-1932)
- `TimeSeriesCanvas` class (Canvas-based, unused — was planning to switch from SVG)
- SVG pendulum with dashed reference lines and arc angle indicators

### current version (2026)

- full-viewport canvas behind page content
- HTML5 Canvas for everything (pendulum + time series)
- self-contained physics (no external JS)
- live KaTeX values updating at ~10fps
- time series scroll right-to-left across full viewport width
- equations condensed to just kinematics + equations of motion
- black on white, clean lines

## 3. what was dropped

- the full step-by-step derivation (algebra for eliminating tension forces, solving for
  angular accelerations). the original post had this in an appendix — it's thorough and
  correct but very long. could bring it back as a collapsible section or separate page.
- lagrangian dynamics section (was always TODO, never written)
- learnings section about choosing generalized coordinates, using computer algebra
- taxonomy of classical mechanics (mechanics > dynamics > kinematics/kinetics)
- timeline of reformulations (Newton 1687, d'Alembert 1742, Euler-Lagrange 1750s,
  Lagrange 1788, Hamilton 1835, etc.)
- SVG diagram with marker definitions, arc annotations, dashed reference lines
- the `enhanced-pendulum-physics.js` external file and `TimeSeriesCanvas` class

all of this content exists in the git history if i want to bring any of it back.

## 4. future ideas

- bring back the full derivation as a separate "derivation" page or collapsible section
- add Lagrangian derivation (always wanted to do this)
- trace trail for the end mass (like the classic double pendulum visualizations)
- interactive controls: click/drag to set initial conditions, adjust masses/lengths
- phase space plot (θ vs θ̇)
- chaos visualization: run two pendulums side by side with slightly different initial
  conditions and watch them diverge
- port the 3D rotating object drawing thing here (from the ping pong paint origin story)

## 5. known issues

- Euler integration drifts over time (energy not conserved). a symplectic integrator
  (Verlet, RK4) would be more accurate for long runs. not visually noticeable in normal
  use but the pendulum will slowly gain or lose energy.
- on narrow viewports the live KaTeX values may overlap with page content
- the time series auto-scales to the data range, which can cause the whole curve to shift
  when a new min/max is reached. could use a fixed range or exponential smoothing.

## 6. math (removed from page for now)

notation: s_x = sin(θ_x), c_x = cos(θ_x), Δ = θ_a - θ_b

### kinematics

positions:
```
x_a = s_a·l_a          x_b = s_a·l_a + s_b·l_b
y_a = -c_a·l_a         y_b = -c_a·l_a - c_b·l_b
```

velocities:
```
ẋ_a = c_a·l_a·θ̇_a          ẋ_b = c_a·l_a·θ̇_a + c_b·l_b·θ̇_b
ẏ_a = s_a·l_a·θ̇_a          ẏ_b = s_a·l_a·θ̇_a + s_b·l_b·θ̇_b
```

accelerations:
```
ẍ_a = c_a·l_a·θ̈_a - s_a·l_a·θ̇_a²
ÿ_a = s_a·l_a·θ̈_a + c_a·l_a·θ̇_a²
ẍ_b = c_a·l_a·θ̈_a + c_b·l_b·θ̈_b - s_a·l_a·θ̇_a² - s_b·l_b·θ̇_b²
ÿ_b = s_a·l_a·θ̈_a + s_b·l_b·θ̈_b + c_a·l_a·θ̇_a² + c_b·l_b·θ̇_b²
```

### equations of motion

from Newton's second law, eliminating the tension forces:

```
θ̈_a = [m_b·sin(Δ)·cos(Δ)·l_a·θ̇_a² + m_b·sin(Δ)·l_b·θ̇_b²
        + ((m_a+m_b)·sin(θ_a) - m_b·sin(θ_b)·cos(Δ))·g]
       / (-(m_a + m_b·sin²(Δ))·l_a)

θ̈_b = [(m_a+m_b)·sin(Δ)·l_a·θ̇_a² + m_b·sin(Δ)·cos(Δ)·l_b·θ̇_b²
        + (m_a+m_b)·sin(Δ)·cos(θ_a)·g]
       / ((m_a + m_b·sin²(Δ))·l_b)
```

### KaTeX source (for when these go back on the page)

```latex
% notation
$s_x = \sin\theta_x$, $c_x = \cos\theta_x$, $\Delta = \theta_a - \theta_b$

% positions
$$\begin{aligned}
x_a &= s_al_a &\qquad x_b &= s_al_a + s_bl_b \\
y_a &= -c_al_a &\qquad y_b &= -c_al_a - c_bl_b
\end{aligned}$$

% velocities
$$\begin{aligned}
\dot{x}_a &= c_al_a\dot{\theta}_a &\qquad \dot{x}_b &= c_al_a\dot{\theta}_a + c_bl_b\dot{\theta}_b \\
\dot{y}_a &= s_al_a\dot{\theta}_a &\qquad \dot{y}_b &= s_al_a\dot{\theta}_a + s_bl_b\dot{\theta}_b
\end{aligned}$$

% accelerations
$$\begin{aligned}
\ddot{x}_a &= c_al_a\ddot{\theta}_a - s_al_a\dot{\theta}_a^2 \\
\ddot{y}_a &= s_al_a\ddot{\theta}_a + c_al_a\dot{\theta}_a^2 \\
\ddot{x}_b &= c_al_a\ddot{\theta}_a + c_bl_b\ddot{\theta}_b - s_al_a\dot{\theta}_a^2 - s_bl_b\dot{\theta}_b^2 \\
\ddot{y}_b &= s_al_a\ddot{\theta}_a + s_bl_b\ddot{\theta}_b + c_al_a\dot{\theta}_a^2 + c_bl_b\dot{\theta}_b^2
\end{aligned}$$

% equations of motion
$$\ddot{\theta}_a = \frac{m_b \sin\Delta\cos\Delta \cdot l_a\dot{\theta}_a^2 + m_b \sin\Delta \cdot l_b\dot{\theta}_b^2 + \left[(m_a{+}m_b)\sin\theta_a - m_b\sin\theta_b\cos\Delta\right] g}{-(m_a + m_b\sin^2\!\Delta)\, l_a}$$

$$\ddot{\theta}_b = \frac{(m_a{+}m_b)\sin\Delta \cdot l_a\dot{\theta}_a^2 + m_b \sin\Delta\cos\Delta \cdot l_b\dot{\theta}_b^2 + (m_a{+}m_b)\sin\Delta\cos\theta_a \cdot g}{(m_a + m_b\sin^2\!\Delta)\, l_b}$$
```

## 7. implementation details

time series uses a circular buffer of 600 samples (10 seconds at 60fps). each band auto-scales
to its data range with shared min/max for both joints. curves are drawn newest-on-right,
oldest-on-left. physics uses symplectic Euler with 4 sub-steps per frame for stability.

## 8. references

- [diego.assencio.com — double pendulum](https://diego.assencio.com/?index=1500c66ae7ab27bb0106467c68feebc6)
- [wolfram scienceworld — double pendulum](https://scienceworld.wolfram.com/physics/DoublePendulum.html)
- [myphysicslab — double pendulum](https://www.myphysicslab.com/pendulum/double-pendulum-en.html)
- [wikipedia — double pendulum](https://en.wikipedia.org/wiki/Double_pendulum)
