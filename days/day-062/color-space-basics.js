/**
 * day 62 - color space basics
 */

/**
 * sRGB vs Linear
 *
 * sRGB is gamma-encoded (non-linear).
 * linear is used for lighting calculations.
 * 
 * color textures (albedo) should be sRGB.
 * data textures (normal, roughness) should be linear.
 */

/**
 * renderer output color space
 *
 * renderer.outputColorSpace = THREE.SRGBColorSpace
 * 
 * ensures correct display on monitors.
 * default in recent three.js versions.
 */

/**
 * texture color space
 *
 * texture.colorSpace = THREE.SRGBColorSpace
 * 
 * applies gamma correction for color textures.
 * only set for albedo/base color textures.
 */

/**
 * linear textures (do NOT use sRGB)
 *
 * - normalMap
 * - roughnessMap
 * - metalnessMap
 * - aoMap
 * - displacementMap
 * - alphaMap
 */

/**
 * color management pipeline
 *
 * 1. load texture
 * 2. set texture.colorSpace (if color texture)
 * 3. render with correct outputColorSpace
 */

/**
 * quick example
 *
 * const loader = new THREE.TextureLoader()
 * const albedo = loader.load('albedo.jpg')
 * albedo.colorSpace = THREE.SRGBColorSpace
 * 
 * const normal = loader.load('normal.jpg')
 * // normal stays linear (default)
 */
