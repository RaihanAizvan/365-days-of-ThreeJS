# day 78 light color

today is about **Light Color** and how mixing colored lights in 3D mimics real-world additive color theory.

in the physical world (and in three.js), light uses an **additive** color model (RGB). when you combine red, green, and blue light, you get white. this is the opposite of the subtractive model (CMYK) used in painting or printing where mixing all colors results in black.

key topics:
- **Additive Mixing**: how primary light colors (R, G, B) combine to form secondary colors (Cyan, Magenta, Yellow) and White.
- **THREE.Color**: constructing and manipulating color objects dynamically.
- **Color Temperature**: simulating warm/cool lights without hardcoding RGB values using HSL.
- **Surface Interaction**: how a coloured light interacts with the base color of an object's material (e.g. blue light on a red object = black).

goal:
- understand the additive light model by overlapping spotlights.
- experiment with `THREE.Color` manipulation.
- observe how material color filters incoming light color.

## runnable demo

a demo exists in `days/day-078/demo`.

with vite:
- `npm run dev`
- open `/days/day-078/demo/index.html`
