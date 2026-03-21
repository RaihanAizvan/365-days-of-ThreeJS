// day 81 — shadow bias theory

/**
 * the curse of shadow acne
 * 
 * 1. the problem
 *    - the shadow map stores depth using an 8-bit, 16-bit, or 32-bit texture.
 *    - because it's discrete data (pixels), curved or angled surfaces "step" through the depth.
 *    - when the engine compares the exact mathematical depth of a surface against the "stepped" depth 
 *      in the shadow map, half the pixels think they are "behind" the shadow-casting surface (themselves).
 *    - result: ugly noise patterns all over your lit objects.
 * 
 * 2. the solution: bias
 *    - 'bias' applies a tiny positive or negative offset (e.g., -0.005) when comparing depths.
 *    - essentially tells the engine: "if a pixel is extremely close to the shadow-caster depth, just 
 *      assume it is illuminated."
 * 
 * 3. normalBias
 *    - traditional bias offsets along the light ray, which causes "peter-panning" (shadows disconnecting 
 *      from the feet of objects as if they are floating).
 *    - 'normalBias' offsets the check along the surface's normal vector. it is vastly superior for curved objects.
 */

console.log('never use zero for shadow bias on curved surfaces!');
