/**
 * world space snippets
 */

/**
 * compute a point "in front of" an object in world space
 *
 * steps:
 * - get world position
 * - get world direction
 * - worldPoint = worldPos + dir * distance
 */

// const worldPos = new THREE.Vector3()
// const dir = new THREE.Vector3()
// mesh.getWorldPosition(worldPos)
// mesh.getWorldDirection(dir)
// const point = worldPos.clone().add(dir.multiplyScalar(2))

/**
 * convert a world point into local space
 */

// const local = point.clone()
// mesh.worldToLocal(local)
