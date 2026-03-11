# day 70 scroll logic & parallax

today is about **scroll-driven animations** and **parallax effects**. this is how you create those cinematic 3d landing pages where the camera moves as you scroll.

instead of using mouse movement for everything, we map the window's scroll position to camera movement or object transformations.

key topics:
- **window.scrolly**: tracking the distance scrolled.
- **lerp (linear interpolation)**: smoothing out the movement so it doesn't feel "jittery".
- **parallax math**: moving objects at different speeds to create depth.
- **browser lifecycle**: handling resize and scroll events efficiently.

goal:
- sync the 3d scene with the page scroll.
- implement a smooth "lerp" transition for the camera.
- create a depth-layered parallax scene.

## runnable demo

a demo exists in `days/day-070/demo`.

with vite:
- `npm run dev`
- open `/days/day-070/demo/index.html`
