# day 84 frustum management

today is about **Frustum Management** and the concept of frustum culling.

the frustum is the invisible 3D volume that defines exactly what a camera can see. it is shaped like a pyramid with the top chopped off (for a perspective camera) or a rectangular prism (for an orthographic camera).

key topics:
- **frustum culling**: three.js automatically hides any objects that are outside of the camera's frustum to save performance.
- **the near & far planes**: controlling the front and back bounds of visibility. objects too close or too far vanish instantly.
- **precision limits**: stretching your near/far planes too far causes Z-fighting (depth errors) because the depth buffer runs out of decimal precision.
- **orthographic vs perspective**: comparing the geometric volume differences between the two main camera types.

goal:
- observe extreme near/far plane clipping.
- toggle `frustumCulled = false` to selectively override engine-level visibility optimizations.
- use an `OrthographicCamera` for isometric/UI rendering.

## runnable demo

a demo exists in `days/day-084/demo`.

with vite:
- `npm run dev`
- open `/days/day-084/demo/index.html`
