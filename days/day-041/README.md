# day 41 parameter mapping

today is about **parameter mapping** — turning UI values into meaningful scene changes.

raw values are rarely what you want.
examples:
- a 0..1 slider might map to a 0..10 speed
- a linear slider might need exponential mapping
- user-friendly units (degrees) map to radians

goal:
- understand linear mapping and ranges
- learn remapping functions (lerp, inverse lerp)
- use non-linear mapping when needed

## runnable demo

a demo exists in `days/day-041/demo`.

with vite:
- `npm run dev`
- open `/days/day-041/demo/index.html`
