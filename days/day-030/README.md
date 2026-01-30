# day 30 pixel ratios

today is about **pixel ratios**.

devices can have high pixel density (retina). that means:
- CSS pixels != device pixels
- rendering at full device pixel ratio can be expensive

three js lets you control the drawing buffer with:
- `renderer.setPixelRatio()`

goal:
- understand device pixel ratio
- trade off sharpness vs performance
- learn a safe cap pattern

## runnable demo

a demo exists in `days/day-030/demo`.

with vite:
- `npm run dev`
- open `/days/day-030/demo/index.html`
