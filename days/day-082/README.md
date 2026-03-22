# day 82 shadow resolution

today is about **Shadow Resolution** and understanding how texture limits define crispness.

as we learned in Day 80, a shadow map is fundamentally just a 2D image texture capturing depth. like any image, scaling it up without adding more pixels results in pixelation (blocky, stair-stepped edges on shadows). 

key topics:
- **mapSize limit**: the maximum size of your shadow texture (always powers of 2).
- **PCFSoftShadowMap**: how three.js optionally blurs the jagged edges of a low-resolution shadow map.
- **performance cost**: why pushing `mapSize` to `4096` or `8192` will cripple mobile devices.
- **the golden rule**: balancing frustum (camera size) and resolution (`mapSize`) optimally.

goal:
- observe blocky, low-resolution shadow edges.
- manipulate `light.shadow.mapSize` to smooth out artifacts.
- toggle `PCFSoftShadowMap` vs `PCFShadowMap` to see algorithmic blurring in action.

## runnable demo

a demo exists in `days/day-082/demo`.

with vite:
- `npm run dev`
- open `/days/day-082/demo/index.html`
