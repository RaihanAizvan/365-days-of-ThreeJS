# day 80 shadow mapping

today is about **Shadow Mapping**, the underlying technique three.js uses to create shadows.

when you enable `castShadow` on a light, three.js actually creates a hidden camera at the light's position and renders the scene from its perspective. it records the *depth* of every object it sees into a texture (the shadow map). later, when rendering from your main camera, it checks this texture to see if a pixel is blocked from the light.

key topics:
- **the shadow camera**: every shadow-casting light has a `.shadow.camera`.
- **frustum control**: how `.left`, `.right`, `.top`, `.bottom`, `.near`, and `.far` control the volume where shadows can exist.
- **optimization rule**: a smaller shadow camera frustum yields sharper shadows with better performance.
- **shadow helpers**: using `CameraHelper` to visually debug what the light "sees".

goal:
- understand that turning on shadows effectively doubles your render cost by rendering the scene a second time.
- learn to manipulate the directional light shadow camera frustum.
- use a `CameraHelper` to debug and optimize the shadow area.

## runnable demo

a demo exists in `days/day-080/demo`.

with vite:
- `npm run dev`
- open `/days/day-080/demo/index.html`
