# day 31 buffergeometry basics

today is about `BufferGeometry` and how vertex data is stored.

three js geometries are just buffers of attributes.
understanding this makes custom shapes and effects easier.

goal:
- understand attributes (position, normal, uv)
- understand item size and typed arrays
- create a custom BufferGeometry
- know when to use index buffers

## runnable demo

a demo exists in `days/day-031/demo`.

with vite:
- `npm run dev`
- open `/days/day-031/demo/index.html`
