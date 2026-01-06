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
