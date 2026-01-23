/**
 * local space snippets
 */

/**
 * example: place an object 2 units "forward" in another object's local space
 */

// const localForward = new THREE.Vector3(0, 0, -2)
// const worldPoint = localForward.clone()
// parent.localToWorld(worldPoint)
// child.position.copy(worldPoint) // careful: this sets local position if child has a parent

/**
 * better: compute a world point, then convert into the parent's local space
 */

// const worldTarget = new THREE.Vector3(1, 2, 3)
// const localTarget = worldTarget.clone()
// child.parent.worldToLocal(localTarget)
// child.position.copy(localTarget)

/**
 * note
 *
 * if you want to set world position directly, you can also use:
 * - child.position.copy(worldTarget)
 *   then child.parent.worldToLocal(child.position)
 * (since position is local)
 */
