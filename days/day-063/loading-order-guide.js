/**
 * day 63 - cube texture loading order
 */

/**
 * The 6-Image Order
 * 
 * THREE.CubeTextureLoader.load() expects an array of 6 images in a specific order:
 * 
 * 1. Positive X (Right)  - 'posx.jpg'
 * 2. Negative X (Left)   - 'negx.jpg'
 * 3. Positive Y (Top)    - 'posy.jpg'
 * 4. Negative Y (Bottom) - 'negy.jpg'
 * 5. Positive Z (Front)  - 'posz.jpg'
 * 6. Negative Z (Back)   - 'negz.jpg'
 */

/**
 * Common Gotchas
 * 
 * - If the images are in the wrong order, the skybox will look "seamed" or "broken".
 * - If one image fails to load, the entire CubeTexture might remain black.
 * - Always use a consistent coordinate system (Three.js is Right-Handed).
 */

/**
 * Example Loader Logic
 * 
 * const loader = new THREE.CubeTextureLoader()
 * loader.setPath('/textures/env/')
 * const texture = loader.load([
 *   'px.png', 'nx.png',
 *   'py.png', 'ny.png',
 *   'pz.png', 'nz.png'
 * ])
 */
