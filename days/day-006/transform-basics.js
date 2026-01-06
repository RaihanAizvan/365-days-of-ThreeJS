/**
 * translation
 *
 * translation moves an object from one position to another
 * it does not rotate or resize the object
 */

/**
 * starting position
 */
const position = { x: 1, y: 2, z: 3 }

/**
 * translation offset
 *
 * this represents movement in space
 */
const translation = { x: 3, y: -1, z: 2 }

/**
 * apply translation
 *
 * new position equals old position plus translation
 */
function translate(pos, offset) {
  return {
    x: pos.x + offset.x,
    y: pos.y + offset.y,
    z: pos.z + offset.z
  }
}

const translatedPosition = translate(position, translation)


/**
 * scale
 *
 * scale changes the size of an object
 * it does not change the position
 */

/**
 * scale factors
 *
 * values greater than one enlarge
 * values between zero and one shrink
 */
const scale = { x: 2, y: 1.5, z: 1 }

/**
 * apply scale
 *
 * scale multiplies each axis
 */
function applyScale(pos, scale) {
  return {
    x: pos.x * scale.x,
    y: pos.y * scale.y,
    z: pos.z * scale.z
  }
}

const scaledPosition = applyScale(position, scale)

/**
 * rotation
 *
 * rotation changes orientation
 * not position or size
 *
 * rotation usually happens around an axis
 * x axis y axis or z axis
 */

/**
 * rotation around y axis
 *
 * cosine and sine control circular movement
 */
function rotateY(pos, angle) {
  return {
    x: pos.x * Math.cos(angle) - pos.z * Math.sin(angle),
    y: pos.y,
    z: pos.x * Math.sin(angle) + pos.z * Math.cos(angle)
  }
}

const angle = Math.PI / 2
const rotatedPosition = rotateY(position, angle)

