/**
 * input state patterns
 */

/**
 * pattern: input state object
 *
 * const input = {
 *   pointer: { x: 0, y: 0 },
 *   keys: {}
 * }
 */

/**
 * pattern: smoothing input
 *
 * use lerp to smooth sudden changes:
 *   current = lerp(current, target, 0.1)
 */

/**
 * pattern: pointer-driven camera
 *
 * let targetRot = pointer.x * 0.5
 * camera.rotation.y = lerp(camera.rotation.y, targetRot, 0.1)
 */
