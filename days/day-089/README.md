# day 89 sprite materials

today is about **Sprite Materials**, moving away from raw `THREE.Points` and learning how to render standalone 2D billboards that perfectly face the camera.

while `THREE.Points` is optimized for millions of tiny dots, what if you need a specialized 2D image (like a health bar, a text label, a glowing lens flare, or a physical tree in an old-school DOOM engine) to always face the user? this is exactly what `THREE.Sprite` does.

key topics:
- **`THREE.Sprite`**: a specialized mesh that rotates automatically to directly face the active camera.
- **`SpriteMaterial`**: the dedicated material for rendering sprites (supports alpha maps, tinting, and depth testing).
- **layering vs. 3D positioning**: understanding how sprites physically exist in the 3D world but draw as flat 2D images.
- **canvas integration**: generating live HTML Canvas text and mapping it to a Sprite as a dynamic label.

goal:
- understand the distinction between a `Point` (part of a massive system) and a `Sprite` (a standalone object).
- create a procedural canvas texture containing text.
- instantiate a `THREE.Sprite` mapping the canvas texture to create a 3D-space floating UI label.

## runnable demo

a demo exists in `days/day-089/demo`.

with vite:
- `npm run dev`
- open `/days/day-089/demo/index.html`
