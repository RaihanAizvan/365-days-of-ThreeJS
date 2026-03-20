// day 79 — shadow theory

/**
 * the cost of darkness
 * 
 * 1. why shadows aren't automatic
 *    - if three.js calculated shadows for every object from every light source automatically, 
 *      the frame rate would drop to zero instantly in complex scenes.
 *    - shadows require an entirely separate pass where the scene is rendered from the perspective of the LIGHT.
 * 
 * 2. the three boolean requirements
 *    to see a shadow, three things MUST be strictly true:
 *    - A: The WebGLRenderer must have shadow mapping explicitly enabled.
 *    - B: The Light must have `light.castShadow = true`.
 *    - C: The casting object must have `mesh.castShadow = true`.
 *    - D (bonus): The floor/receiving object must have `mesh.receiveShadow = true`.
 * 
 * 3. shadow maps
 *    - the result of the light's rendering pass is saved to a texture called a "shadow map".
 *    - we will dive deeper into shadow maps tomorrow, but today focus on the boolean logic.
 */

console.log('if your shadows do not appear, you almost certainly forgot to enable one of the boolean flags.');
