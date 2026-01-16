# day 16 renderer configuration

today is about the renderer settings that affect how your scene looks and performs.

`WebGLRenderer` has a lot of knobs.
we will focus on the ones that show up immediately in real projects:
- size + pixel ratio
- color space / output
- tone mapping + exposure
- clear color
- antialias

goal:
- know which settings to set on every project
- understand the performance tradeoffs (especially pixel ratio)

## runnable demo

a demo exists in `days/day-016/demo`.

with vite:
- `npm run dev`
- open `/days/day-016/demo/index.html`
