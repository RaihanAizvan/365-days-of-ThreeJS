# day 57 meshstandardmaterial deep dive

today is about **MeshStandardMaterial in depth**.

MeshStandardMaterial is the industry-standard physically-based rendering (PBR) material.

provides realistic lighting, reflections, and material properties.

key properties:
- metalness
- roughness
- color/map
- normalMap
- envMap

goal:
- master PBR material properties
- understand metalness and roughness
- create realistic materials

## runnable demo

a demo exists in `days/day-057/demo`.

with vite:
- `npm run dev`
- open `/days/day-057/demo/index.html`
