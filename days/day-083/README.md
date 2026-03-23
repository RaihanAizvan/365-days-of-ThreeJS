# day 83 camera helpers

today is about **Camera Helpers**, stepping away from lights and focusing entirely on visualizing how different cameras observe a 3D environment.

while we briefly touched `THREE.CameraHelper` to debug shadow map boundaries, today we use it to explicitly visualize and debug the most fundamental component of any scene: the primary application cameras. this involves working with multiple cameras simultaneously.

key topics:
- **the unseen camera**: why rendering a scene requires one camera to observe it, but visualizing that camera requires a *second* "spectator" camera.
- **frustum visualization**: understanding the near plane, far plane, and field of view (FOV) via the physical yellow guide lines.
- **split-screen debugging**: setting up two viewports (one for the main camera, one for the spectator) to watch the frustum manipulate in real-time.

goal:
- instantiate an active `THREE.CameraHelper` for a `PerspectiveCamera`.
- understand how to wire up a dual-renderer viewport.
- visually comprehend the culling frustum.

## runnable demo

a demo exists in `days/day-083/demo`.

with vite:
- `npm run dev`
- open `/days/day-083/demo/index.html`
