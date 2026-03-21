# day 81 shadow biasing

today is about **Shadow Biasing**, addressing one of the most common and frustrating visual artifacts in 3d rendering: **shadow acne**.

when a shadow map is generated, the depth values recorded in the texture have limited precision. due to this precision limit, when an object is rendering itself, the depth recorded in the shadow map and the actual depth of the fragment can mathematically conflict. this causes the surface to sporadically shadow itself, resulting in ugly moiré patterns or "acne."

key topics:
- **precision limits**: why depth buffers cause mathematical rounding errors.
- **shadow acne**: identifying self-shadowing artifacts on lit surfaces.
- **bias**: a tiny mathematical offset added to the shadow calculation to push the shadow "deeper" into the surface.
- **normal bias**: a newer, more robust bias that offsets shadows along the surface normal instead of the light direction.

goal:
- understand the cause of shadow acne.
- learn to tune `shadow.bias` and `shadow.normalBias` correctly.
- create a scene where acne is intentionally extreme, then fix it dynamically.

## runnable demo

a demo exists in `days/day-081/demo`.

with vite:
- `npm run dev`
- open `/days/day-081/demo/index.html`
