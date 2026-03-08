# day 66 gltf animations

today is about **GLTF Animations**, focusing on the Three.js animation system for loaded models.

GLTF models often come with baked-in animations (clips). To play them, we use:
- `THREE.AnimationMixer`: the player for a specific object.
- `AnimationClip`: the animation data (e.g., "Run", "Jump").
- `AnimationAction`: the control for playing, fading, or looping a clip.

key topics:
- accessing `gltf.animations`.
- creating an `AnimationMixer` for a scene or mesh.
- using `mixer.clipAction(clip)` to get an action.
- updating the mixer in the `tick` function with `clock.getDelta()`.

goal:
- load a GLTF model with animations.
- play its default animation.
- understand how to switch between different animations.

## runnable demo

a demo exists in `days/day-066/demo`.

with vite:
- `npm run dev`
- open `/days/day-066/demo/index.html`
