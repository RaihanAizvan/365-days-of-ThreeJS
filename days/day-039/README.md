# day 39 debugging ui

today is about **debugging ui**.

small ui controls help you inspect values in real time:
- positions, rotations
- colors and materials
- lighting intensity

three js apps often use tools like dat.GUI or lil-gui.
but a simple HTML overlay can be enough for learning.

goal:
- understand why debug UI helps
- learn to wire UI controls to scene parameters
- keep debug UI separate from core logic

## runnable demo

a demo exists in `days/day-039/demo`.

with vite:
- `npm run dev`
- open `/days/day-039/demo/index.html`
