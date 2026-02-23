# day 54 clamp-to-edge wrapping

today is about **clamp-to-edge wrapping**.

clamp-to-edge is a texture wrapping mode that extends the edge pixels infinitely.

useful for preventing seams and artifacts at texture boundaries.

key property:
- THREE.ClampToEdgeWrapping

goal:
- understand when to use clamp-to-edge
- compare with repeat and mirror wrapping
- prevent texture artifacts

## runnable demo

a demo exists in `days/day-054/demo`.

with vite:
- `npm run dev`
- open `/days/day-054/demo/index.html`
