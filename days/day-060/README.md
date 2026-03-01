# day 60 light helpers and debugging

today is about **light helpers and debugging**.

light helpers visualize light positions, directions, and shadow cameras.

they make it easier to debug lighting setups and tune shadows.

key helpers:
- DirectionalLightHelper
- PointLightHelper
- SpotLightHelper
- HemisphereLightHelper
- RectAreaLightHelper
- CameraHelper (for shadow cameras)

goal:
- use helpers to debug lights
- visualize shadow frustums
- remove helpers in production

## runnable demo

a demo exists in `days/day-060/demo`.

with vite:
- `npm run dev`
- open `/days/day-060/demo/index.html`
