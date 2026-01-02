/**
 * coordinates in 3d space
 *
 * every object exists at a coordinate
 * a coordinate is written using x y and z
 */

/**
 * origin
 *
 * the origin is the center of the world
 * all values are zero here
 */
const origin = { x: 0, y: 0, z: 0 }

/**
 * x axis
 *
 * changing x moves left or right
 */
const xAxisPoint = { x: 5, y: 0, z: 0 }

/**
 * y axis
 *
 * changing y moves up or down
 */
const yAxisPoint = { x: 0, y: 3, z: 0 }

/**
 * z axis
 *
 * changing z moves forward or backward
 */
const zAxisPoint = { x: 0, y: 0, z: -4 }
/**
 * combining axes
 *
 * a real position usually changes more than one axis
 */
const combinedPosition = { x: 5, y: 3, z: -4 }

/**
 * this single object describes one point in space
 * this is how objects are placed in graphics
 */


/**
 * relation to 3d graphics
 *
 * cameras objects and lights all use coordinates
 * changing numbers changes where things appear
 *
 * three js uses this idea through vector3
 * but the concept stays the same
 */
