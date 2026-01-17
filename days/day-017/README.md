# day 17 object positioning

today is about moving objects around in three js.

positioning is mostly about these three properties on any `Object3D`:
- `position` (Vector3)
- `rotation` (Euler) / `quaternion`
- `scale` (Vector3)

goal:
- set position/rotation/scale correctly
- understand local vs world space for transforms
- learn useful methods: `lookAt`, `getWorldPosition`, `translateX/Y/Z`

## runnable demo

a demo exists in `days/day-017/demo`.

with vite:
- `npm run dev`
- open `/days/day-017/demo/index.html`
