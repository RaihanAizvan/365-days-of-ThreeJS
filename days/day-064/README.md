# day 64 hdr environment maps

today is about **HDR (High Dynamic Range)** environment maps.

unlike standard 8-bit textures (LDR), HDR images store significantly more light information, allowing for realistic lighting and bloom effects.

key topics:
- `THREE.RGBELoader` for loading `.hdr` files.
- `EquirectangularReflectionMapping`: how most HDR maps are mapped.
- floating point textures vs 8-bit textures.
- the importance of `renderer.toneMapping`.

goal:
- load an HDR environment map.
- use it to illuminate a scene without lights.
- see the difference in reflection quality.

## runnable demo

a demo exists in `days/day-064/demo`.

with vite:
- `npm run dev`
- open `/days/day-064/demo/index.html`
