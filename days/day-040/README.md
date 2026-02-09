# day 40 tweakpane setup

today is about setting up **Tweakpane** for debugging controls.

Tweakpane is a lightweight UI for sliders, toggles, and color pickers.
it is common in three js demos to tweak parameters live.

goal:
- install tweakpane
- create a pane and add inputs
- wire pane values to scene parameters
- keep pane state separate from render loop

## runnable demo

a demo exists in `days/day-040/demo`.

with vite:
- `npm run dev`
- open `/days/day-040/demo/index.html`
