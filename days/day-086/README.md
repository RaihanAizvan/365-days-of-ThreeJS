# day 86 probes workflow

today is about **Light Probes** and spherical harmonics, a technique used to simulate complex global illumination realistically and efficiently for dynamic objects.

while baked lightmaps are perfect for static objects (walls, floors), they do not work for dynamic objects (characters, cars) because those objects move through the environment. a light probe is a mathematical way to sample the light at a specific point in space and apply that complex lighting to moving objects incredibly cheaply.

key topics:
- **the light probe**: an object that defines the ambient lighting conditions at a specific physical location.
- **spherical harmonics (SH)**: the mind-bending math that compresses a 360-degree high-dynamic-range panoramic light field into just 9 vectors.
- **irradiance**: the total light striking a surface from all directions.
- **`THREE.LightProbe`**: adding spherical harmonic lighting data to a scene.

goal:
- understand the concept of evaluating 360-degree light without massive textures.
- instantiate a `LightProbe` in a scene.
- observe how `SphericalHarmonics3` data can alter global illumination mathematically.

## runnable demo

a demo exists in `days/day-086/demo`.

with vite:
- `npm run dev`
- open `/days/day-086/demo/index.html`
