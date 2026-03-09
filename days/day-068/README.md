# day 68 animation blending & crossfading

today is about **Animation Blending** and **Transitions**. this is how we make character movements feel fluid and professional.

in dynamic systems (like games), we rarely play a single animation in isolation. we blend between them—fading out an "Idle" animation while fading in a "Run" animation.

key topics:
- `AnimationAction.setEffectiveWeight(weight)`: defining the influence of a clip.
- `AnimationAction.crossFadeTo(action, duration, warp)`: smooth interpolation.
- `AnimationAction.fadeIn(duration)` / `fadeOut(duration)`: automatic weight ramp.
- **additive vs. normalized**: mixing multiple layers of motion.

goal:
- understand weight-based interpolation between actions.
- implement a state machine that handles transitions.
- create a demo that visually blends between two distinct states.

## runnable demo

a demo exists in `days/day-068/demo`.

with vite:
- `npm run dev`
- open `/days/day-068/demo/index.html`
