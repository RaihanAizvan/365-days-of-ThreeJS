/**
 * day 57 - MeshStandardMaterial properties
 */

/**
 * basic setup
 *
 * const material = new THREE.MeshStandardMaterial({
 *   color: 0xffffff,
 *   metalness: 0,
 *   roughness: 0.5
 * })
 */

/**
 * color and albedo
 *
 * material.color = new THREE.Color(0xff0000)
 * material.map = albedoTexture  // base color texture
 */

/**
 * metalness
 *
 * material.metalness = 0.0  // non-metal
 * material.metalness = 1.0  // full metal
 * material.metalnessMap = metalnessTexture  // grayscale texture
 */

/**
 * roughness
 *
 * material.roughness = 0.0  // smooth/glossy
 * material.roughness = 1.0  // rough/matte
 * material.roughnessMap = roughnessTexture  // grayscale texture
 */

/**
 * normal mapping
 *
 * material.normalMap = normalTexture
 * material.normalScale = new THREE.Vector2(1, 1)  // intensity
 */

/**
 * ambient occlusion
 *
 * material.aoMap = aoTexture
 * material.aoMapIntensity = 1.0
 * // requires second UV set (uv2)
 */

/**
 * environment mapping
 *
 * material.envMap = cubeTexture
 * material.envMapIntensity = 1.0
 * // reflections from environment
 */

/**
 * emissive
 *
 * material.emissive = new THREE.Color(0xff0000)
 * material.emissiveIntensity = 1.0
 * material.emissiveMap = emissiveTexture
 * // self-illumination (doesn't light scene)
 */
