# day 14 basic mesh

today is about the **mesh** itself and what makes it visible.

in three js:
```js
const mesh = new THREE.Mesh(geometry, material)
```

a mesh is the combination of:
- **geometry**: what shape (vertices, faces)
- **material**: how it looks (color, shading, textures)

goal:
- understand Mesh = Geometry + Material
- learn common built-in geometries (Box, Sphere, Plane, etc)
- know how BufferGeometry stores vertex data
- see how to reuse geometry/material for performance

## runnable demo

there is a demo in `days/day-014/demo`.

with vite:
- `npm run dev`
- open `/days/day-014/demo/index.html`
