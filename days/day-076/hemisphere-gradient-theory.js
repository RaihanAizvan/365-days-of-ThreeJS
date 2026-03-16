// day 76 — hemisphere gradient theory

/**
 * the math behind the hemisphere
 * 
 * 1. dot product interpolation:
 *    - for every pixel on an object's surface, three.js calculates the normal vector (which way the surface points).
 *    - it compares this normal to the hemisphere light's "up" direction (its position).
 *    - facing perfectly "up"   -> 100% skyColor
 *    - facing sideways         -> 50% sky / 50% ground (smoothed)
 *    - facing perfectly "down" -> 100% groundColor
 * 
 * 2. positioning:
 *    - unlike ambient light, a HemisphereLight's position matters!
 *    - the position defines the "sky" direction. By default it is at (0, 1, 0) (straight up).
 *    - if you rotate or move the light to (1, 0, 0), the gradient will interpolate along the X-axis horizontally.
 * 
 * 3. artificial global illumination:
 *    - the hemisphere gradient is a very cheap computational trick to fake the way light bounces off the floor (groundColor) 
 *      and scatters through the atmosphere (skyColor).
 */

console.log('moving the hemisphere light changes the axis of its color gradient.');
