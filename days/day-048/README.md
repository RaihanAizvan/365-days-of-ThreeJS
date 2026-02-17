# day 48 mipmapping logic

today is about **mipmapping**.

mipmaps are precomputed, downscaled versions of a texture.
when a texture is far away, mipmaps reduce aliasing and improve performance.

goal:
- understand what mipmaps are
- learn how minification filters choose mip levels
- see the difference between mipmapped and non-mipmapped filters

## runnable demo

a demo exists in `days/day-048/demo`.

with vite:
- `npm run dev`
- open `/days/day-048/demo/index.html`
