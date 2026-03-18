// day 78 — light color theory

/**
 * the additive model & materials
 * 
 * 1. Additive Mixing (RGB)
 *    - In the physical world, overlapping spotlights of Red (0xff0000), Green (0x00ff00), and Blue (0x0000ff) 
 *      creates perfectly White (0xffffff) light in the center.
 *    - Three.js perfectly simulates this additive relationship.
 * 
 * 2. Secondary Colors
 *    - Red + Green = Yellow
 *    - Green + Blue = Cyan
 *    - Red + Blue = Magenta
 * 
 * 3. Material Interaction
 *    - a MeshStandardMaterial defines what wavelengths of light it will REFLECT.
 *    - a pure red object (0xff0000) only reflects red light.
 *    - If you shine a pure blue light (0x0000ff) on a pure red object, it will reflect NOTHING, and the object will appear Black.
 * 
 * 4. Temperature (HSL)
 *    - defining light color via HSL (Hue, Saturation, Lightness) is often better for simulating real-world "warm" (orange/red) and "cool" (blue/white) lighting.
 */

console.log('if your scene looks unexpectedly dark, check if your light color and material color are mutually exclusive.');
