/**
 * day 56 - MeshBasicMaterial properties
 */

/**
 * basic setup
 *
 * const material = new THREE.MeshBasicMaterial({
 *   color: 0xff0000
 * })
 */

/**
 * color property
 *
 * material.color = new THREE.Color(0xff0000)
 * material.color.set('#ff0000')
 * material.color.setHex(0xff0000)
 */

/**
 * map (texture)
 *
 * material.map = texture
 * multiplies texture color with material color
 */

/**
 * wireframe mode
 *
 * material.wireframe = true
 * material.wireframeLinewidth = 1  // doesn't work on most platforms
 */

/**
 * transparency
 *
 * material.transparent = true
 * material.opacity = 0.5  // 0 to 1
 */

/**
 * side rendering
 *
 * material.side = THREE.FrontSide  // default
 * material.side = THREE.BackSide
 * material.side = THREE.DoubleSide
 */

/**
 * combine mode with textures
 *
 * material.combine = THREE.MultiplyOperation  // default
 * material.combine = THREE.MixOperation
 * material.combine = THREE.AddOperation
 */
