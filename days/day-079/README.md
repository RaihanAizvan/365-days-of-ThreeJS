# day 79 shadow theory

today is about **Shadow Theory** and understanding the basic mechanics of how shadows are cast and received in a 3D environment.

shadows are computationally expensive. unlike the real world where shadows are simply the absence of light resulting from physically blocked rays, in traditional 3D engines, shadows must be explicitly calculated and rendered.

key topics:
- **the shadow pipeline**: understanding that shadows require their own rendering pass.
- **cast vs receive**: objects must explicitly be told to `castShadow` onto others, or `receiveShadow` from others.
- **performance cost**: why enabling shadows disables certain fast optimizations.
- **renderer configuration**: the absolute minimum code required to turn shadows on globally in three.js.

goal:
- grasp the logical separation between objects that cast shadows and those that receive them.
- enable shadows globally on a `WebGLRenderer`.
- create a basic foundational scene with clear shadow projection.

## runnable demo

a demo exists in `days/day-079/demo`.

with vite:
- `npm run dev`
- open `/days/day-079/demo/index.html`
