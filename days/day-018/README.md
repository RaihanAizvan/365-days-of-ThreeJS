# day 18 scale transformations

today is about scaling objects.

scaling seems simple, but it has important consequences:
- scale is inherited by children
- non-uniform scale can affect lighting (normals)
- negative scale can mirror geometry (and flip winding)

goal:
- understand how `object.scale` works
- understand inherited scale in the scene graph
- know common pitfalls (non-uniform + negative scale)

## runnable demo

a demo exists in `days/day-018/demo`.

with vite:
- `npm run dev`
- open `/days/day-018/demo/index.html`
