# day 85 baking foundations

today is about **Light Baking**, the industry-standard optimization for static scenes.

calculating lights, shadows, and bounce-illumination in real-time is incredibly expensive. "baking" is the process of calculating all of this complex light physics ahead of time (usually in a software like Blender) and saving the result as a flat image texture called a "lightmap."

key topics:
- **the concept of baking**: trading real-time calculation cost for VRAM texture memory.
- **lightmaps**: a secondary texture that multiplies over your base color to simulate shadows and highlights.
- **uv2 coordinates**: why lightmaps require a completely unique set of UV mapping coordinates (no overlapping geometry).
- **the `lightMap` property**: how to assign baked lighting in `THREE.MeshStandardMaterial`.

goal:
- understand the massive performance benefits of static baked lighting.
- generate a secondary set of UV coordinates for a mesh.
- apply a procedural lightmap to a material without using any actual `THREE.Light` objects in the scene.

## runnable demo

a demo exists in `days/day-085/demo`.

with vite:
- `npm run dev`
- open `/days/day-085/demo/index.html`
