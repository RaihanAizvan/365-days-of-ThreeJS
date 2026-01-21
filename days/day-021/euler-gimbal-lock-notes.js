/**
 * gimbal lock notes
 */

/**
 * gimbal lock is not "a bug".
 *
 * it's a limitation of representing 3D rotation as 3 sequential axis rotations.
 */

/**
 * symptom
 *
 * near certain angles, changing yaw feels like changing roll (or vice versa).
 */

/**
 * how to handle it
 *
 * 1) avoid the problematic angle range (sometimes possible)
 * 2) use quaternions (recommended)
 * 3) use incremental axis-angle rotations
 */

/**
 * in games
 *
 * common camera approach is to store:
 * - yaw around world up
 * - pitch around camera local right
 * and clamp pitch away from +/- 90 degrees.
 */
