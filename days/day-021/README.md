# day 21 euler angles

today is a deeper dive into **Euler angles**.

euler angles are convenient (3 numbers), but they come with tricky behavior:
- rotation *order* matters
- rotations are around moving (local) axes by default
- you can hit **gimbal lock** (lose a degree of freedom)

goal:
- understand what `rotation.order` means
- see why gimbal lock happens
- know when to prefer quaternions (or incremental rotations)

## runnable demo

a demo exists in `days/day-021/demo`.

with vite:
- `npm run dev`
- open `/days/day-021/demo/index.html`
