# day 29 viewport scaling

today is about **viewport scaling**.

in three js, the viewport is the rectangle of pixels you render into.
scaling issues happen when:
- canvas size doesn’t match display size
- device pixel ratio is ignored
- camera aspect isn’t updated on resize

goal:
- understand canvas size vs drawing buffer size
- handle resize correctly
- understand pixel ratio tradeoffs
- know how viewport affects projection

## runnable demo

a demo exists in `days/day-029/demo`.

with vite:
- `npm run dev`
- open `/days/day-029/demo/index.html`
