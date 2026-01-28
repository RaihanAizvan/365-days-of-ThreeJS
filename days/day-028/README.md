# day 28 interaction loops

today is about **interaction loops**: updating the scene in response to user input.

animation loops are not just about time.
input (mouse, touch, keyboard) is another signal that drives state.

goal:
- understand the input → state → render cycle
- keep input handling separate from rendering
- avoid doing heavy work directly inside event handlers

## runnable demo

a demo exists in `days/day-028/demo`.

with vite:
- `npm run dev`
- open `/days/day-028/demo/index.html`
