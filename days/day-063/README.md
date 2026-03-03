# day 63 cube textures

today is about **cube textures** and environment mapping.

a cube texture is a set of 6 images representing the sides of a cube (px, nx, py, ny, pz, nz). they are used for skyboxes and reflections.

key topics:
- `THREE.CubeTextureLoader`
- `scene.background` (Skyboxes)
- `meshStandardMaterial.envMap` (Reflections)
- loading order: positive x, negative x, positive y, negative y, positive z, negative z.

goal:
- load a 6-image environment map.
- set it as the scene background.
- apply it to a reflective sphere.

## runnable demo

a demo exists in `days/day-063/demo`.

with vite:
- `npm run dev`
- open `/days/day-063/demo/index.html`
