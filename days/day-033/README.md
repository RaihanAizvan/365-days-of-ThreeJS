# day 33 index buffers

today is about **index buffers** in `BufferGeometry`.

index buffers let you reuse vertices instead of duplicating them.
this reduces memory and can improve cache efficiency.

goal:
- understand indexed vs non-indexed geometry
- know how `geometry.setIndex()` works
- know when indexing matters

## runnable demo

a demo exists in `days/day-033/demo`.

with vite:
- `npm run dev`
- open `/days/day-033/demo/index.html`
