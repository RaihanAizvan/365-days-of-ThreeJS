# day 65 gltf loading basics

today is about **GLTF (GL Transmission Format)**, the industry standard for 3D models on the web.

GLTF is efficient, extensible, and supports everything from geometry and materials to animations and skinning.

key topics:
- `THREE.GLTFLoader`: the core loader for `.gltf` and `.glb` files.
- `.gltf` (JSON + external bins/textures) vs `.glb` (Binary, all-in-one).
- handling the `gltf.scene` object.
- why GLTF is the "JPEG of 3D".

goal:
- load a GLTF model into the scene.
- understand how to access and manipulate the loaded mesh.
- verify the model displays correctly with lighting.

## runnable demo

a demo exists in `days/day-065/demo`.

with vite:
- `npm run dev`
- open `/days/day-065/demo/index.html`
