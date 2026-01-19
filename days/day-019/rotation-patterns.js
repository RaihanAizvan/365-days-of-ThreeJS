/**
 * rotation patterns
 */

/**
 * pattern: keep your own angles, then set object.rotation each frame
 *
 * let yaw = 0
 * function tick(dt) {
 *   yaw += dt
 *   mesh.rotation.y = yaw
 * }
 */

/**
 * pattern: orbit around a point by rotating a parent group
 *
 * const pivot = new THREE.Group()
 * pivot.add(mesh)
 * scene.add(pivot)
 *
 * // put mesh at an offset
 * mesh.position.x = 2
 *
 * // rotate pivot => mesh orbits
 * pivot.rotation.y += 0.01
 */

/**
 * pattern: lookAt for facing targets
 *
 * - great for cameras, turrets
 * - but note: it overwrites rotation
 */

/**
 * note: radians
 *
 * degrees to radians:
 *   radians = degrees * Math.PI / 180
 */
