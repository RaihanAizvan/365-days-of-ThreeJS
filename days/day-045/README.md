# day 45 texture loading

today is about **loading textures**.

in three.js you can use:
- `TextureLoader` for single textures
- `LoadingManager` to coordinate multiple assets

loading is asynchronous.
understanding the lifecycle helps you show progress and avoid blank frames.

goal:
- load textures with `TextureLoader`
- use a `LoadingManager` to track progress
- handle onLoad / onProgress / onError

## runnable demo

a demo exists in `days/day-045/demo`.

with vite:
- `npm run dev`
- open `/days/day-045/demo/index.html`
