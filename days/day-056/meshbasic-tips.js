/**
 * MeshBasicMaterial tips and tricks
 */

/**
 * ignores all lights
 *
 * removing lights won't affect MeshBasicMaterial.
 * always renders at full brightness.
 */

/**
 * combine with fog
 *
 * scene.fog = new THREE.Fog(0x000000, 1, 100)
 * material.fog = true  // default
 */

/**
 * texture tinting
 *
 * material.color = new THREE.Color(0xff0000)
 * material.map = texture
 * // texture is tinted red
 */

/**
 * alpha maps for cutouts
 *
 * material.alphaMap = alphaTexture
 * material.transparent = true
 * // creates cutout shapes
 */

/**
 * vertex colors
 *
 * material.vertexColors = true
 * uses geometry's color attribute
 */

/**
 * performance vs MeshStandardMaterial
 *
 * ~2-5x faster on most hardware.
 * ideal for mobile and low-end devices.
 */

/**
 * no normal maps or bump maps
 *
 * MeshBasicMaterial doesn't support:
 * - normalMap
 * - bumpMap
 * - displacementMap (geometry only)
 */
