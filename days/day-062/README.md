# day 62 texture color space and encoding

today is about **texture color space and encoding**.

correct color space handling is essential for accurate colors.

three.js uses sRGB for color textures and linear for data textures.

key topics:
- SRGBColorSpace vs LinearSRGBColorSpace
- renderer output color space
- which textures should be sRGB
- common mistakes

goal:
- understand color spaces in textures
- configure correct encoding
- avoid washed out or dark textures

## runnable demo

a demo exists in `days/day-062/demo`.

with vite:
- `npm run dev`
- open `/days/day-062/demo/index.html`
