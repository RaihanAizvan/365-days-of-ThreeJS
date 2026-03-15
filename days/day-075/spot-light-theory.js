// day 75 — spot light theory

/**
 * understanding the spot cone
 * 
 * 1. the cone shape
 *    - it's defined by an angle (in radians) from the center axis.
 *    - Math.PI / 3 is roughly a 60-degree spread.
 * 
 * 2. penumbra (soft edges)
 *    - 0.0 means the light has a sharp edge.
 *    - 1.0 means the light fades out entirely from the center to the edge.
 *    - 0.5 is usually a sweet spot for realistic flashlights.
 * 
 * 3. the target property
 *    - like DirectionalLight, SpotLight has a .target property.
 *    - the light points from .position to .target.position.
 *    - the target must be added to the scene!
 * 
 * 4. shadow maps
 *    - spot lights use PerspectiveCamera for shadow mapping.
 *    - their shadows are less expensive than point lights because they only render 1 frustum (the cone) instead of 6 sides.
 */

console.log('penumbra > 0 is essential for anything that is not a laser pointer.');
