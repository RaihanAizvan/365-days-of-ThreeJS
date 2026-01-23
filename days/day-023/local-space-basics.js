/**
 * day 23 - local space
 */

/**
 * local space
 *
 * coordinates measured relative to an object's parent.
 *
 * mesh.position is local.
 *
 * if mesh is a child of a group, mesh.position is relative to that group.
 */

/**
 * world space
 *
 * coordinates measured relative to the scene origin.
 */

/**
 * key rule
 *
 * parent transforms affect children.
 *
 * if a parent moves/rotates/scales:
 * - a child's world position changes
 * - even if the child's local position did not change
 */

/**
 * converting points
 *
 * you often need to convert a point between spaces.
 *
 * three js helpers:
 * - object.localToWorld(vec3)
 * - object.worldToLocal(vec3)
 *
 * important: these functions MUTATE the vector you pass in.
 */

/**
 * getting world position
 *
 * - object.getWorldPosition(target)
 * - object.getWorldQuaternion(target)
 * - object.getWorldScale(target)
 */

/**
 * getting world direction
 *
 * object.getWorldDirection(dir)
 * returns the direction of the object's -Z axis in world space.
 */

/**
 * matrix updates
 *
 * three js updates matrices lazily.
 * if you need correct world values immediately after changes:
 * - object.updateMatrixWorld(true)
 */
