# day 26 clock mechanisms

today is about **time** in animation loops.

we already saw dt-based movement (day 25).
now we focus on where dt comes from and how to control it.

common needs:
- consistent delta time (clamp huge dt spikes)
- pause / resume
- slow motion (time scale)
- measuring elapsed time

goal:
- understand `performance.now()` vs `THREE.Clock`
- understand elapsed time vs delta time
- learn time scaling and dt clamping patterns

## runnable demo

a demo exists in `days/day-026/demo`.

with vite:
- `npm run dev`
- open `/days/day-026/demo/index.html`
