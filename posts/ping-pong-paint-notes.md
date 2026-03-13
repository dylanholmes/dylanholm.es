# ping pong paint — notes

this is a companion doc for the post at `posts/shader-drawing.html`. the post itself is
just the interactive demo with minimal text. these notes are everything else — why i made
it, how i got here, and drafts of things i might want to say about it someday.

---

## 1. about the post

a full-page drawing tool that runs behind the page content. hold spacebar to paint,
scroll to resize, keys 1–7 to switch brush types. the name "ping pong paint" comes from
the core technique — ping-pong rendering — which is what makes the strokes accumulate
rather than disappear each frame.

## 2. history

i didn't know the term "ping-pong rendering" until i chatted with claude about this
project. i just reinvented it, like everybody does — it's one of those things that's obvious
once you have the pieces in front of you.

the origin was learning openGL. i had some program where i was learning how to find the
location on a model — raycasting, hit testing, that kind of thing. later i used that to
draw on a rotating cube, which was really fun. i have a little video of that somewhere.
will probably port that to this blog too eventually — it's not complicated and should work
in webGL.

from the 3D drawing thing i moved to 2D, and the progression was pretty inevitable once
it started:

1. stamp a circle at the mouse position → gaps between stamps at normal mouse speed
2. draw a line between last two positions → continuous but jagged, piecewise linear
3. fit a cubic bezier through recent positions → smooth curves
4. try different brush shapes → circles, rings, ellipses, spray cans
5. try low-opacity ring outlines → interference patterns along the stroke, suddenly pretty
6. feed the output buffer back as input → canvas remembers, accumulation, painting

the ping-pong part wasn't planned. once you know about the two buffers it's just kind of
obvious — what if i feed the output back in.

one thing i had in an earlier version that isn't here yet: keyboard-driven canvas movement.
hold a key to rotate or translate the canvas while drawing with the mouse. your hand does
one thing and the canvas does another and the trails spiral around in ways you can't fully
control. felt like a spirograph. definitely want to bring that back.

### original version (~2017)

hugo shortcode on djjh.gitlab.io. differences from the current version:

- fixed-size canvas on the page, not full-viewport
- drawing via mouse click and drag (tiring on trackpad)
- point sprites for brush stamps (`gl_PointSize` — 64px cap on Apple Silicon)
- no antialiasing on hard brushes (jaggies at large sizes)
- same 7 brush types, same bezier interpolation, same source/sink architecture

### current version (2026)

ported to plain HTML, polished with AI coding tools in the background while doing other
work. this kind of thing is never going to be a priority but AI assistance makes it
possible to chip away at hobby stuff without losing real time. it actually helps — injecting
something fun into the day improves productivity overall.

what changed:

- full-viewport canvas, fixed behind page content — draw anywhere, links and text still work
- spacebar to draw instead of mouse click
- instanced quads instead of point sprites — no brush size limit
- `fwidth()` antialiasing on hard brushes
- clear color matches page background

## 3. naming

the technique goes by several names:

- **ping-pong rendering** — most common. two buffers alternate, one read one write.
- **frame feedback** / **render feedback** — output feeds back as input. common in shadertoy/demoscene.
- **temporal accumulation** — the academic term.
- **framebuffer persistence** — emphasizes the "it remembers" part.
- **stateful rendering** — giving stateless shaders the illusion of state.

went with "ping pong paint" — the technical term plus what you're doing with it.

other candidates considered: residue, afterimage, trail paint, paint trails, ghost brush,
underpaint, palimpsest, overprint, smear, traces, inevitable, persistence, never clear

## 4. future ideas

- bring back keyboard-driven canvas movement (rotation, translation while drawing)
- 3D version — drawing on a rotating object again
- write up the post properly with some of the draft content below

## 5. known issues

- **last stroke segment keeps drawing after spacebar release.** when you let go of space,
  the last curve segment appears to keep accumulating — it gradually darkens until it
  reaches full opacity. likely the brush attributes (positions, alpha) from the final frame
  aren't being cleared, so the ping-pong loop keeps compositing the same stroke segment
  on top of itself every frame.

## 6. draft content

stuff i might put on the page eventually. two angles explored so far — one is a concise
pseudocode explanation, one is a longer piece mixing history and technical context.

### draft: pseudocode

```
frame: an image shown to the screen
buffer: an image kept offscreen
stamp: a brush shape placed at a point

forever:
  fit a curve through recent mouse positions
  stamp brush shapes along the curve onto the previous frame's buffer
  this frame's buffer becomes next frame's previous
  composite onto the screen with a cursor overlay
```

### draft: context and resonance

fragment shaders are blind and memoryless. each pixel runs in isolation — no knowledge of
its neighbors, no memory of what it computed last frame. the GPU's entire architecture is
built around this: massively parallel, stateless execution. every frame, the slate is wiped
clean.

ping-pong rendering is the hack that gives the GPU a past. two offscreen buffers alternate
roles — one is read while the other is written, then they swap. the previous frame's output
becomes the current frame's input. it's a simple trick, but it transforms what a shader can
do: suddenly marks persist, trails accumulate, and the canvas *remembers*.

the impulse to accumulate traces on a single surface is old. in the 1880s, etienne-jules
marey superimposed multiple exposures on one photographic plate — a walking figure ghosting
across the frame, every phase of motion collapsed into a single image. duchamp acknowledged
marey's direct influence on *nude descending a staircase* (1912). man ray painted with light
in long exposures, letting a penlight's path burn into film.

the same instinct shows up wherever screens exist. nam june paik pointed cameras at their
own monitors in the 1960s, creating infinite recursive spirals — video feedback as art. the
demoscene turned "not clearing the framebuffer" into an aesthetic — delay vectors, plasma
trails, rotozoomer feedback — often because *not* clearing the screen was faster on limited
hardware. the windows mystify screensaver (1992) left its polygon trails onscreen because
large GDI fills were expensive, and the accident looked better than the intention.

in creative coding, the gesture is even simpler. in processing, you omit the `background()`
call. in openframeworks, `ofSetBackgroundAuto(false)`. one line — the decision to let the
canvas keep its history — turns animation into painting. jared tarbell built an entire
practice on this: *substrate*, *sand dollar*, *interaggregate* — structures emerging grain by
grain from millions of tiny additive marks, the canvas never cleared.

what makes it satisfying might be perceptual. the human visual system has a temporal
integration window of about 100 milliseconds — fast-moving objects produce motion streaks
that our neurons actually use to infer direction. we already see trails. digital accumulation
effects externalize something our visual cortex is doing on its own.

a canvas that clears each frame shows you what *is*. a canvas that accumulates shows you
what *was* and what is *becoming*. this one remembers.

### draft: implementation details

three render passes per frame. first pass draws brush stamps along a bezier curve into an
offscreen buffer, composited on top of the previous frame (ping-pong). second pass copies
the result. third pass draws it to the screen with the cursor overlay.

brush stamps are instanced quads — point sprites are capped by `gl_PointSize` (only 64px
on Apple Silicon, ~256 on Intel Macs, 512–2048 elsewhere). instanced quads have no limit.
hard brush edges use `smoothstep` with `fwidth` for per-pixel antialiasing. brush color
cycles through hues using phase-shifted sine waves.

## 7. references

- ping-pong rendering: GPU Gems Ch. 38 (Mark Harris, 2004), The Book of Shaders
- chronophotography: etienne-jules marey (1880s)
- video feedback as art: nam june paik, steina and woody vasulka
- analog video synthesizers: rutt/etra (1972), sandin image processor
- demoscene trail effects: delay vectors, plasma, rotozoomer feedback
- screensavers: windows mystify (1992), after dark (berkeley systems, 1989)
- generative art: jared tarbell (complexification.net), casey reas (processing)
- GPU stamp brushes: ciallo (shen ciao, SIGGRAPH 2023/2024)
- visual persistence: ~100ms temporal integration window, motion streaks (PLOS One)
- shadertoy buffer system: buffers A-D with per-frame feedback
- pavel dobryakov: webgl fluid simulation (2017)
- karl sims: reaction-diffusion
