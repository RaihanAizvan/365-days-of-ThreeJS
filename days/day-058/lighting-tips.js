/**
 * lighting tips and best practices
 */

/**
 * always use at least two lights
 *
 * ambient alone is flat and boring.
 * ambient + directional is minimum for depth.
 */

/**
 * AmbientLight intensity guideline
 *
 * keep between 0.2-0.5 usually.
 * too high washes out details.
 * too low makes shadows too dark.
 */

/**
 * DirectionalLight for sunlight
 *
 * position doesn't matter, only direction.
 * light.position.set(10, 10, 10) same as (1, 1, 1)
 */

/**
 * PointLight distance matters
 *
 * set distance to avoid lighting distant objects.
 * improves performance.
 * distance = 0 means infinite (expensive)
 */

/**
 * use decay = 2 for realism
 *
 * physically accurate falloff.
 * default is 1 (legacy).
 */

/**
 * colored lights for atmosphere
 *
 * warm (orange) for sunset/fire.
 * cool (blue) for moonlight/tech.
 * subtle tints feel natural.
 */

/**
 * light helpers for debugging
 *
 * const helper = new THREE.DirectionalLightHelper(light)
 * scene.add(helper)
 * 
 * const pointHelper = new THREE.PointLightHelper(pointLight)
 * scene.add(pointHelper)
 */

/**
 * performance: limit light count
 *
 * each light adds rendering cost.
 * aim for 2-5 lights in most scenes.
 * use baked lighting for static scenes.
 */

/**
 * shadows are expensive
 *
 * enable only on key lights.
 * reduce shadow map size if needed.
 * not every light needs shadows.
 */

/**
 * avoid pure white scenes
 *
 * use slight color tints.
 * more natural and interesting.
 * pure white (0xffffff) at full intensity is harsh.
 */
