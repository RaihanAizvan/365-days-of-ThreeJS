# day 56 meshbasicmaterial deep dive

today is about **MeshBasicMaterial in depth**.

MeshBasicMaterial is the simplest material - it renders without lighting calculations.

useful for UI, unlit objects, and performance-critical scenarios.

key properties:
- color
- map (texture)
- wireframe
- transparency

goal:
- master MeshBasicMaterial properties
- understand when to use it
- explore unlit rendering techniques

## runnable demo

a demo exists in `days/day-056/demo`.

with vite:
- `npm run dev`
- open `/days/day-056/demo/index.html`
