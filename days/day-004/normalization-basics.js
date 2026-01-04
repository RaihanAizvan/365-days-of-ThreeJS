/**
 * vector length
 *
 * length tells how big a vector is
 * it represents magnitude or distance
 */

/**
 * example direction with length
 */
const direction = { x: 3, y: 4, z: 0 }

/**
 * calculate vector length
 *
 * length is found using square root
 */
function getLength(v) {
  return Math.sqrt(
    v.x * v.x +
    v.y * v.y +
    v.z * v.z
  )
}

const length = getLength(direction)

/**
 * this length is greater than one
 * which means the vector also includes distance
 */

/**
 * normalization
 *
 * normalization converts a vector into unit length
 * unit length means length = 1
 *
 * direction stays the same
 * magnitude is removed
 */
function normalize(v) {
  const len = getLength(v)

  return {
    x: v.x / len,
    y: v.y / len,
    z: v.z / len
  }
}

const normalizedDirection = normalize(direction)

/**
 * normalizedDirection points the same way
 * but its length is now one
 */
/**
 * why normalization matters
 *
 * unnormalized directions cause inconsistent behavior
 * faster movement
 * uneven rotation
 * incorrect camera behavior
 *
 * normalized directions ensure consistency
 * speed distance and rotation can be controlled separately
 */

/**
 * relation to three js
 *
 * three js provides normalize internally
 * but it follows the same math
 *
 * understanding this helps avoid bugs
 * especially with cameras lights and raycasting
 */
