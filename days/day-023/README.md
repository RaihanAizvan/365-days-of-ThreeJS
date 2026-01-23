# day 23 local space

today is about **local space**.

a lot of confusion in 3d comes from mixing these spaces:
- local space (relative to the object or its parent)
- world space (relative to the scene origin)

three js is a scene graph, so local space is everywhere.

goal:
- understand local position vs world position
- understand local axes vs world axes
- learn the main conversion helpers
  - `getWorldPosition`
  - `localToWorld` / `worldToLocal`
  - `getWorldDirection`

## runnable demo

a demo exists in `days/day-023/demo`.

with vite:
- `npm run dev`
- open `/days/day-023/demo/index.html`
