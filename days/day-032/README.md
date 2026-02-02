# day 32 vertex attributes

today is about **vertex attributes**.

attributes are per-vertex data stored in buffers.
common attributes:
- position (vec3)
- normal (vec3)
- uv (vec2)
- color (vec3/vec4)

if you understand attributes, you can create your own data-driven geometry.

goal:
- understand how attributes map to buffers
- use custom attributes (like per-vertex color)
- understand itemSize and typed arrays

## runnable demo

a demo exists in `days/day-032/demo`.

with vite:
- `npm run dev`
- open `/days/day-032/demo/index.html`
