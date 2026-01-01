/**
 * vector basics for 3d graphics
 *
 * this file is not meant to be executed
 * it exists to explain how 3d movement works at a math level
 *
 * in graphics programming we do not move objects
 * we update numbers that represent where an object exists in space
 */

/**
 * position
 *
 * a position describes where an object is in 3d space
 *
 * x represents left and right
 * y represents up and down
 * z represents forward and backward
 *
 * think of this like a pin on a 3d graph
 */
const position = { x: 2, y: 1, z: 0 }

/**
 * velocity
 *
 * velocity describes how much the position changes per frame
 *
 * this does not move the object by itself
 * it only stores the direction and speed of movement
 *
 * if velocity x is positive the object moves right
 * if velocity y is positive the object moves up
 */
const velocity = { x: 0.1, y: 0, z: 0 }

/**
 * vector addition
 *
 * in graphics movement happens through vector addition
 *
 * new position equals old position plus velocity
 *
 * this means
 * x moves by velocity x
 * y moves by velocity y
 * z moves by velocity z
 *
 * this operation usually happens every frame in an animation loop
 */
function addVectors(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
    z: a.z + b.z
  }
}

/**
 * next position
 *
 * this represents where the object will be
 * after one frame of movement
 *
 * no rendering happens here
 * we are only calculating numbers
 */
const nextPosition = addVectors(position, velocity)

/**
 * target
 *
 * a target is a point in space we want to
 * move toward
 * look at
 * rotate toward
 *
 * cameras characters and lights all use targets
 */
const target = { x: 10, y: 1, z: 0 }

/**
 * vector subtraction
 *
 * subtraction is used to find direction
 *
 * direction equals target minus current position
 *
 * this tells us which way to go from the current position
 * to reach the target
 */
function subtractVectors(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
    z: a.z - b.z
  }
}

/**
 * direction vector
 *
 * this vector points from the object toward the target
 *
 * direction is not a position
 * it is an arrow like value showing where to move or face
 *
 * in three js this idea is used in
 * camera lookat
 * object chasing another object
 * raycasting
 */
const direction = subtractVectors(target, position)

/**
 * summary
 *
 * position answers where am i
 * velocity answers how am i moving
 * addition updates movement
 * subtraction finds direction
 *
 * three js provides these operations using vector3
 * understanding the math removes confusion and magic
 */
