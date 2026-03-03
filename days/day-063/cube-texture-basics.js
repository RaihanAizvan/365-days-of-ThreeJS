/**
 * day 63 - cube texture basics
 */

/**
 * Loading a Cube Texture
 *
 * Use CubeTextureLoader.
 * The order MUST be: [px, nx, py, ny, pz, nz]
 */
/*
const loader = new THREE.CubeTextureLoader()
const cubeTexture = loader.load([
  'px.jpg', 'nx.jpg',
  'py.jpg', 'ny.jpg',
  'pz.jpg', 'nz.jpg'
])
*/

/**
 * Skybox (Background)
 *
 * Simply set the scene background to the cube texture.
 */
// scene.background = cubeTexture

/**
 * Reflections (Environment Map)
 *
 * Standard materials can reflect the cube texture.
 */
/*
const material = new THREE.MeshStandardMaterial({
  envMap: cubeTexture,
  roughness: 0,
  metalness: 1
})
*/

/**
 * Global Environment
 *
 * Since Three.js r137+, you can set scene.environment
 * to apply an envMap to all materials globally.
 */
// scene.environment = cubeTexture
