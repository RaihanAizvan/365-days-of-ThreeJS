# day 27 frame deltas

today is about **frame deltas** (dt).

we already know we should move things like:
- `position += speed * dt`

but dt itself has issues:
- it is noisy (jitter)
- it can spike (tab switch, debugger pause)
- smoothing dt can make motion feel better, but adds lag

goal:
- understand why dt fluctuates
- learn dt clamping and smoothing patterns
- understand when dt smoothing is helpful vs harmful

## runnable demo

a demo exists in `days/day-027/demo`.

with vite:
- `npm run dev`
- open `/days/day-027/demo/index.html`
