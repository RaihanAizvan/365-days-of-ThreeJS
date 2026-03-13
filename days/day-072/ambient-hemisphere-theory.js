// day 72 — ambient & hemisphere light theory

/**
 * Ambient vs. Hemisphere
 * 
 * 1. AmbientLight:
 *    - Mathematical constant added to every pixel.
 *    - No direction, no shadows, no shading.
 *    - Makes objects look flat if too bright.
 * 
 * 2. HemisphereLight:
 *    - Directional-ambient hybrid.
 *    - Takes a sky color (top) and a ground color (bottom).
 *    - Surfaces facing up get the sky color, facing down get ground color.
 *    - Mimics the effect of an skybox or floor bounce without expensive calcs.
 * 
 * 3. Artistic Role:
 *    - Use these to fill in the harsh shadows created by Directional/Point lights.
 *    - Keep intensity very low (0.1 to 0.3) for realistic scenes.
 */

console.log('ambient light provides the floor, directional light provides the walls.');
