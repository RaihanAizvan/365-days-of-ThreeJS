# day 47 color management

today is about **color management**.

color looks wrong if you mix color spaces.
three js expects:
- color textures: sRGB
- data textures (normal/roughness): linear

and it outputs to the screen using `renderer.outputColorSpace`.

goal:
- understand sRGB vs linear
- set texture colorSpace correctly
- set renderer output color space

## runnable demo

a demo exists in `days/day-047/demo`.

with vite:
- `npm run dev`
- open `/days/day-047/demo/index.html`
