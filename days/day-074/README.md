# day 74 point falloff

today is about **Point Lights** and their falloff characteristics.

unlike directional lights which shine equally everywhere, point lights emanate from a specific position in all directions, illuminating nearby objects strongly and fading into darkness as distance increases.

key topics:
- **the inverse-square law**: revisiting how light intensity diminishes proportional to the square of the distance.
- **decay parameter**: tweaking the physical realism of the light.
- **distance parameter**: setting a boundary for the light's influence for performance vs realism.
- **shadow mapping**: point lights use a perspective camera internally to create omnidirectional shadows.

goal:
- understand distance vs decay in `THREE.PointLight`.
- create an atmospheric scene using carefully positioned point lights.

## runnable demo

a demo exists in `days/day-074/demo`.

with vite:
- `npm run dev`
- open `/days/day-074/demo/index.html`
