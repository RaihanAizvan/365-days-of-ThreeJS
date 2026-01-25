# day 25 animation loop

today is about the animation loop.

in the browser, the usual loop tool is:
- `requestAnimationFrame(callback)`

three js does not animate anything automatically.
you update your scene (numbers) and then render again.

goal:
- understand `requestAnimationFrame`
- understand delta time (frame time)
- avoid frame-rate-dependent movement
- understand variable timestep vs fixed timestep (conceptually)

## runnable demo

a demo exists in `days/day-025/demo`.

with vite:
- `npm run dev`
- open `/days/day-025/demo/index.html`
