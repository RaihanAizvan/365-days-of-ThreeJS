# day 20 grouping logic

today is about using groups to structure behavior.

in three js, a group is just an `Object3D` that has children.

the trick is *why* you group:
- to create pivots (orbiting)
- to separate transforms (movement vs scale)
- to create reusable "prefabs" (factory functions)

goal:
- learn common grouping patterns
- avoid transform side effects (like scaling child spacing)
- keep scenes readable as they grow

## runnable demo

a demo exists in `days/day-020/demo`.

with vite:
- `npm run dev`
- open `/days/day-020/demo/index.html`
