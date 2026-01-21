/**
 * day 21 - euler angles
 */

/**
 * what is an Euler angle?
 *
 * it's a way to represent a 3D rotation using 3 rotations about axes.
 *
 * in three js: object.rotation is a THREE.Euler
 * - x, y, z in radians
 * - order (string), default 'XYZ'
 */

/**
 * order matters
 *
 * 'XYZ' means apply X rotation, then Y, then Z.
 *
 * changing order changes the final orientation even with the same x/y/z values.
 */

/**
 * intrinsic vs extrinsic intuition
 *
 * a common way to think about Euler rotations in engines is:
 * - rotations are applied around the object's axes (intrinsic),
 *   which move as you rotate.
 *
 * so "rotate Y" after "rotate X" is not around the same Y axis as before.
 */

/**
 * gimbal lock (mechanical analogy)
 *
 * imagine three rings (gimbals) controlling orientation.
 *
 * if one rotation brings two axes into alignment,
 * you effectively lose one independent rotation axis.
 *
 * classic case:
 * - pitch (X) = 90 degrees
 * - yaw and roll become the same axis
 */

/**
 * important three js note
 *
 * three js stores the authoritative rotation as a quaternion.
 * Euler is a convenience interface.
 *
 * when you set object.rotation, three js updates object.quaternion.
 * when you set object.quaternion, three js updates object.rotation.
 */

/**
 * practical advice
 *
 * - use Euler for simple UI sliders / small rotations
 * - for continuous 3-axis rotation, prefer:
 *   - incremental rotateX/Y/Z
 *   - quaternions
 */
