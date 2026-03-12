# day 71 lighting fundamentals

today is about **lighting fundamentals**, specifically the physical properties of light in three.js and how they interact with physically based materials.

while we've touched on lights before, today focuses on the mathematical and physical aspects that make a scene look "real" rather than "cg".

key topics:
- **light decay (attenuation)**: how light intensity drops over distance.
- **physical light units**: understanding intensity in lumens versus arbitrary units.
- **point light falloff**: the quadratic inverse law.
- **standard material response**: how `meshstandardmaterial` calculates light reflection.

goal:
- understand the difference between `physicallycorrectlights` (legacy) vs modern `renderer.uselegacyights = false`.
- master the `decay` and `distance` parameters of point and spot lights.
- create a scene where lighting feels weighted and realistic.

## runnable demo

a demo exists in `days/day-071/demo`.

with vite:
- `npm run dev`
- open `/days/day-071/demo/index.html`
