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
