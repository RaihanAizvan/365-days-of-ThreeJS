# day 24 world space

today is about **world space**.

world space is the final result after the scene graph applies all parent transforms.

if local space is "relative to parent", world space is "relative to the scene origin".

goal:
- understand world position / world direction
- learn how to convert points between spaces
- learn how to set an object's world position correctly (even if it has a parent)

## runnable demo

a demo exists in `days/day-024/demo`.

with vite:
- `npm run dev`
- open `/days/day-024/demo/index.html`
