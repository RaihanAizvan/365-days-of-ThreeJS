/**
 * day 24 - world space
 */

/**
 * world position
 *
 * object.getWorldPosition(out)
 *
 * gives the object's position in world space.
 */

/**
 * world direction
 *
 * object.getWorldDirection(out)
 * returns the object's -Z axis direction in world space.
 */

/**
 * localToWorld / worldToLocal
 *
 * these convert POINTS (positions), not directions.
 * they apply translation.
 *
 * if you want to transform a direction vector, you typically use
 * - getWorldDirection
 * - or apply quaternion/matrix without translation
 */

/**
 * setting world position (important)
 *
 * object.position is local.
 * so if object has a parent, doing:
 *   object.position.copy(worldTarget)
 * is WRONG (it interprets worldTarget as local).
 *
 * correct approach:
 * 1) take the world target
 * 2) convert it to the parent's local space
 * 3) set object.position to that local value
 */

// const worldTarget = new THREE.Vector3(1, 2, 3)
// const localTarget = worldTarget.clone()
// object.parent.worldToLocal(localTarget)
// object.position.copy(localTarget)

/**
 * matrix updates
 *
 * if you read world values right after changing transforms,
 * call updateMatrixWorld(true) on a parent/root.
 */
