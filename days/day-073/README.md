# day 73 directional vectors & sun light

today is about **Directional Lights** and the geometry of shadows. 

unlike point lights that radiate from a single point, directional lights emulate a source that is infinitely far away (like the sun). all light rays travel in parallel, which simplifies calculations and creates consistent shadow angles across a large area.

key topics:
- **Directional Vectors**: understanding how the `position` and `target` properties define light direction.
- **Infinite Distance**: why the actual position value only matters for shadow calculation, not light intensity.
- **The Target Property**: how to aim your sun at specific objects.
- **Parallel Rays**: the visual difference between sun-light and point-light.

goal:
- master the directional light's target system.
- understand how to position a directional light for optimal shadow coverage.
- create a scene with a moving "sun" that rotates around a central point.

## runnable demo

a demo exists in `days/day-073/demo`.

with vite:
- `npm run dev`
- open `/days/day-073/demo/index.html`
