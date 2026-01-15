# day 15 camera perspectives

today is about how the camera projects 3d onto 2d.

two main camera types in three js:
- `PerspectiveCamera` (most common, looks like real life)
- `OrthographicCamera` (no perspective distortion, useful for ui / isometric)

goal:
- understand fov / aspect / near / far
- understand perspective vs orthographic projection
- learn how to update projection on resize

## runnable demo

there is a demo in `days/day-015/demo`.

with vite:
- `npm run dev`
- open `/days/day-015/demo/index.html`
