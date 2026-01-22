/**
 * day 22 - quaternion math (practical)
 */

/**
 * what a quaternion represents
 *
 * in graphics, we use unit quaternions to represent 3D rotations.
 *
 * a quaternion is 4 numbers: (x, y, z, w)
 *
 * you don't need to memorize formulas.
 * you need intuition:
 * - it stores an axis of rotation + an amount, in a way that composes cleanly.
 */

/**
 * axis-angle intuition
 *
 * any 3D rotation can be represented as:
 * - a unit axis vector (direction)
 * - an angle (radians)
 *
 * three js:
 *   q.setFromAxisAngle(axis, angle)
 */

// const axis = new THREE.Vector3(0, 1, 0) // rotate around Y
// const q = new THREE.Quaternion().setFromAxisAngle(axis, Math.PI / 2)

/**
 * composition
 *
 * applying rotation A then rotation B is done by multiplication.
 * note: order matters.
 *
 * in three js:
 * - q.multiply(qB)  => q = q * qB
 * - q.premultiply(qA) => q = qA * q
 */

/**
 * why quaternions avoid gimbal lock
 *
 * gimbal lock happens in the parameterization (Euler angles).
 * a quaternion stores the final orientation without that singularity.
 */

/**
 * interpolation: slerp
 *
 * slerp = spherical linear interpolation.
 * it gives constant angular velocity between two orientations.
 *
 * three js:
 * - q.slerp(qTarget, t)
 * - THREE.Quaternion.slerp(qA, qB, qOut, t)
 */

/**
 * common workflow in three js
 *
 * - you often set Euler angles for convenience
 * - three js converts to quaternion
 *
 * but for smooth turning (like a spaceship), you typically:
 * - compute a target quaternion
 * - slerp current -> target
 */
