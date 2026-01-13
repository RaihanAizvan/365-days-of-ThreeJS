# day 13 scene construction

today is about building a scene in a structured way.

three js scenes are not just a pile of meshes.
they are a *graph* of objects (a tree), where parents affect children.

goal:
- scene graph basics (Object3D)
- groups and parenting
- local transforms vs world transforms
- helpers for debugging (axes helper)

## runnable demo

there is a runnable demo in `days/day-013/demo`.

with vite:
- `npm install`
- `npm run dev`
- open `/days/day-013/demo/index.html`
