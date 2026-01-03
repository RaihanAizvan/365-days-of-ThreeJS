/**
 * position
 * as we learned yesterday
 * position describes a location in space
 * it answers the question where am i
 */

/**
 * example position
 *
 * this point exists at a specific place
 */
const position = { x: 2, y: 1, z: -4 }


/**
 * direction
 *
 * direction represents an orientation or intent
 * it does not describe a location
 */

/**
 * example directions
 *
 * these describe where something is pointing
 */
const directionRight = { x: 1, y: 0, z: 0 }
const directionUp = { x: 0, y: 1, z: 0 }
const directionForward = { x: 0, y: 0, z: -1 }

/**
 * directions are relative
 * they make sense only when applied to a position
 */


/**
 * direction from two positions
 *
 * direction can be calculated using two positions
 * target - position gives direction
 */
function getDirection(from, to) {
  return {
    x: to.x - from.x,
    y: to.y - from.y,
    z: to.z - from.z
  }
}

const objectPosition = { x: 1, y: 1, z: 1 }
const targetPosition = { x: 4, y: 3, z: -2 }

const directionToTarget = getDirection(
  objectPosition,
  targetPosition
)

/**
 * this direction tells where to face
 * not where the object currently exists
 */
