# day 19 rotation principles

today is about rotations: the hardest transform to keep intuitive.

in three js you will see both:
- `object.rotation` (Euler angles)
- `object.quaternion` (quaternion rotation)

you can use either, but you need the right mental model.

goal:
- understand local axes (rotations are around local axes by default)
- understand Euler order and why it matters
- understand why quaternions exist (avoid gimbal lock)

## runnable demo

a demo exists in `days/day-019/demo`.

with vite:
- `npm run dev`
- open `/days/day-019/demo/index.html`
