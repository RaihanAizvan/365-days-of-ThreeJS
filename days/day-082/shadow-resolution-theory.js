// day 82 — shadow resolution theory

/**
 * the pixelation problem
 * 
 * 1. Texture Dimensions
 *    - By default, three.js sets a light's shadow map size to a tiny 512x512 pixels.
 *    - If your light's shadow camera covers a massive area (e.g., 100x100 world units), 
 *      one pixel of the shadow map will cover almost a quarter of a meter!
 *    - Result: blocky, jagged edges on your character's shadows.
 * 
 * 2. Fixing it via mapSize
 *    - You can increase the width/height of the mapSize (e.g., 2048x2048).
 *    - These must be powers of 2 (128, 256, 512, 1024, 2048, 4096).
 *    - Higher resolutions consume vastly more VRAM and GPU processing. An 8192x8192 map might crash old phones.
 * 
 * 3. Fixing it via Soft Shadows
 *    - Instead of just using a massive texture, you can tell the Renderer to blur the edges.
 *    - `THREE.PCFSoftShadowMap` samples surrounding pixels in the shadow map to smooth out the jagged steps.
 *    - It looks beautiful but has a higher generic computation cost on the GPU per fragment.
 */

console.log('if you want high quality shadows, try tightening the frustum BEFORE blindly increasing the mapSize.');
