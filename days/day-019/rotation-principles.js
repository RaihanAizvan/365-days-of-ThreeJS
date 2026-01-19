/**
 * day 19 - rotation principles
 */

/**
 * rotations happen around axes
 *
 * in three js:
 * - +X is red
 * - +Y is green
 * - +Z is blue
 *
 * object rotation changes the object's local axes.
 * that means the *next* rotation is around a new axis.
 */

/**
 * euler angles
 *
 * object.rotation is an Euler:
 * - rotation.x, rotation.y, rotation.z (radians)
 * - rotation.order (default 'XYZ')
 *
 * order matters:
 * rotating X then Y is not the same as rotating Y then X.
 */

/**
 * gimbal lock (intuition)
 *
 * Euler rotations can "lose" a degree of freedom.
 *
 * example intuition:
 * - rotate 90 degrees around X
 * - now Y and Z axes can line up
 * - further rotations behave unexpectedly
 *
 * this is not a three js bug, it is how Euler angles work.
 */

/**
 * quaternions
 *
 * object.quaternion represents rotation without gimbal lock.
 * you normally let three js manage it.
 *
 * important:
 * - setting object.rotation also updates object.quaternion
 * - setting object.quaternion also updates object.rotation
 *
 * but if you animate rotations heavily, quaternions can be more stable.
 */

/**
 * local vs world rotation
 *
 * - object.rotateX/Y/Z(angle) rotates in local space
 * - object.rotateOnWorldAxis(axis, angle) rotates around a world axis
 */

/**
 * useful debugging
 * - AxesHelper shows current orientation
 * - log object.rotation.toArray()
 */
