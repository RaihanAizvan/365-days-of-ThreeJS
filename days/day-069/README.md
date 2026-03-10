# day 69 raycasting & interactivity

today is about **Raycasting**, the primary way we interact with 3D objects using a 2D screen (mouse/touch).

a "ray" is cast from the camera, through the mouse position on the screen, into the 3D scene. we then check which objects that ray intersects.

key topics:
- `THREE.Raycaster`: the core class for intersection testing.
- **normalized device coordinates (ndc)**: converting mouse (x, y) from pixels to -1 to +1 range.
- `raycaster.setFromCamera()`: aligning the ray with the view.
- `intersectObjects()`: getting a list of intersected meshes, sorted by distance.

goal:
- detect when the mouse is over an object.
- change object properties (like color) on hover or click.
- understand the performance implications of raycasting every frame.

## runnable demo

a demo exists in `days/day-069/demo`.

with vite:
- `npm run dev`
- open `/days/day-069/demo/index.html`
