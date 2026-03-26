// day 86 — light probes & spherical harmonics theory

/**
 * math as lighting
 * 
 * 1. The Dynamic Object Problem
 *    - Static floors and walls look great with baked lightmaps.
 *    - But what happens when a dynamic 3D character walks into a baked red room?
 *    - The character doesn't have a baked lightmap (because they move).
 *    - If they only use a generic white HemisphereLight, they will look totally out of place in the red room!
 * 
 * 2. What is a Light Probe?
 *    - A Light Probe solves this. It's an invisible point in space that stores the 360-degree color of the light striking it.
 *    - When the character walks near the probe, Three.js applies that probe's lighting to the character.
 * 
 * 3. Spherical Harmonics (The Magic)
 *    - Normally, a 360-degree panorama of light would require a heavy HDRI texture (megabytes of VRAM).
 *    - Spherical Harmonics (SH) is a complex mathematical formula that compresses all of that 360-degree color data 
 *      into just 9 vectors (27 floats total).
 *    - It's like a highly advanced, mathematically perfect Ambient Light that knows directional color.
 */

console.log('LightProbes bridge the gap between static baked environments and dynamic moving characters.');
