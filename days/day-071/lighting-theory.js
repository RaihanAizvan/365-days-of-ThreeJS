// day 71 — lighting theory

/**
 * Physical Light Properties
 * 
 * 1. The Inverse Square Law:
 *    - In the real world, light intensity decreases by the square of the distance (1/d²).
 *    - In Three.js, this is controlled by the `decay` property of PointLight and SpotLight.
 *    - Setting `decay = 2` results in physically accurate falloff.
 * 
 * 2. Light Units:
 *    - By default, Three.js uses arbitrary units.
 *    - However, modern Three.js (r150+) defaults to physically correct lighting where
 *      PointLight intensity is in Candela (cd) and AmbientLight in Lux (lx).
 * 
 * 3. Distance Parameter:
 *    - If `distance = 0`, the light never stops (it just decays forever).
 *    - If `distance > 0`, the intensity reaches 0 at exactly that distance. 
 *    - Using `distance = 0` with `decay = 2` is generally preferred for realism.
 */

console.log('lighting is 50% technical setup and 50% artistic intuition.');
