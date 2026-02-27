/**
 * day 58 - light types basics
 */

/**
 * AmbientLight
 *
 * illuminates all objects equally from all directions.
 * no shadows, no directionality.
 * 
 * const ambient = new THREE.AmbientLight(0xffffff, 0.5)
 * scene.add(ambient)
 */

/**
 * DirectionalLight
 *
 * parallel rays from one direction (like sunlight).
 * casts shadows.
 * position determines direction, not distance.
 * 
 * const directional = new THREE.DirectionalLight(0xffffff, 1)
 * directional.position.set(5, 5, 5)
 * scene.add(directional)
 */

/**
 * PointLight
 *
 * emits light in all directions from a point (like a bulb).
 * casts shadows.
 * intensity falls off with distance.
 * 
 * const point = new THREE.PointLight(0xffffff, 1, 100)
 * point.position.set(0, 5, 0)
 * scene.add(point)
 */

/**
 * SpotLight
 *
 * cone of light from a point (like a flashlight).
 * casts shadows.
 * controllable angle and penumbra.
 * 
 * const spot = new THREE.SpotLight(0xffffff, 1)
 * spot.position.set(0, 10, 0)
 * spot.angle = Math.PI / 6
 * scene.add(spot)
 */

/**
 * HemisphereLight
 *
 * sky and ground colors (outdoor ambient).
 * no shadows.
 * simulates sky dome lighting.
 * 
 * const hemisphere = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.5)
 * scene.add(hemisphere)
 */

/**
 * RectAreaLight
 *
 * rectangular area light (like LED panels).
 * no shadows in standard renderer.
 * only works with MeshStandardMaterial and MeshPhysicalMaterial.
 * 
 * const rect = new THREE.RectAreaLight(0xffffff, 5, 4, 10)
 * rect.position.set(0, 5, 0)
 * scene.add(rect)
 */
