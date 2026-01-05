/**
 * world space
 *
 * world space is the global coordinate system
 * all positions are measured from the world origin
 */

/**
 * example world positions
 */
const worldOrigin = { x: 0, y: 0, z: 0 }

const worldPositionA = { x: 5, y: 0, z: -3 }
const worldPositionB = { x: -2, y: 4, z: 1 }

/**
 * these positions are absolute
 * they do not depend on other objects
 */

/**
 * local space
 *
 * local space is relative to a parent object
 * positions are measured from the parent
 */

/**
 * parent object position in world space
 */
const parentPosition = { x: 10, y: 0, z: 0 }

/**
 * child position in local space
 *
 * this position is relative to the parent
 */
const childLocalPosition = { x: 2, y: 1, z: 0 }
