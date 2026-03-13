# day 72 ambient intensity & hemisphere lights

today is about **Ambient Lighting** and its role in defining the "base" look of a scene.

while direct lights (point, directional) create highlights and shadows, ambient lights ensure that the dark areas aren't pitch black. however, overusing ambient light can make a scene look "flat" and "cg".

key topics:
- **THREE.AmbientLight**: providing a uniform color to all objects regardless of position.
- **THREE.HemisphereLight**: a more natural alternative that uses a sky color and a ground color.
- **Intensity Balancing**: how to use low-intensity ambient light to preserve contrast.
- **Bounced Light Simulation**: using hemisphere lights to mimic real-world light bouncing off the floor.

goal:
- understand the limitations of `AmbientLight`.
- learn to use `HemisphereLight` for more dynamic foundations.
- master the balance between base light and directional light.

## runnable demo

a demo exists in `days/day-072/demo`.

with vite:
- `npm run dev`
- open `/days/day-072/demo/index.html`
