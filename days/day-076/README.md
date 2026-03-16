# day 76 hemisphere gradients

today is a deeper dive into **Hemisphere Lights**, specifically focusing on how they generate smooth lighting **gradients** across objects.

while we introduced `HemisphereLight` as an alternative to `AmbientLight` for environment fill, today we explore its mathematical interpolation.

key topics:
- **the gradient vector**: understanding how Three.js blends the `skyColor` and `groundColor` based on the surface normal.
- **up vector alignment**: how the hemisphere light determines its top and bottom.
- **material interaction**: how `MeshStandardMaterial` roughness dictates the softness of the gradient.
- **skybox simulation**: using a gradient as a cheap alternative to complex HDR skyboxes.

goal:
- understand the dot-product math behind hemisphere gradients.
- manipulate the position to change the gradient alignment.
- create a scene that relies predominantly on a hemisphere light to show off the gradient falloff.

## runnable demo

a demo exists in `days/day-076/demo`.

with vite:
- `npm run dev`
- open `/days/day-076/demo/index.html`
