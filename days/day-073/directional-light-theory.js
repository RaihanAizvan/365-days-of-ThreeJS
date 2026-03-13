// day 73 — directional light theory

/**
 * The Geometry of a Directional Light
 * 
 * 1. Infinite Distance:
 *    - In the real world, the sun is so far away that for most intents and purposes,
 *      its rays are parallel. Three.js emulates this.
 *    - Intensity does NOT drop off with distance in `DirectionalLight`.
 * 
 * 2. Position vs. Target:
 *    - The light's rays travel from the `position` towards the `target`.
 *    - Default target is (0, 0, 0).
 *    - To change where the sun "points", you must move the `target.position`.
 * 
 * 3. Shadow Importance:
 *    - While light intensity is independent of position, the SHADOW frustum
 *      is calculated from the light's position. This is why position still matters.
 */

console.log('directional light is a vector, not a point.');
