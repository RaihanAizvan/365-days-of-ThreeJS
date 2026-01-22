/**
 * quaternion snippets
 */

/**
 * rotate an object to face a direction
 *
 * - lookAt is easiest
 * - but if you need a quaternion target:
 *   q.setFromUnitVectors(fromDir, toDir)
 */

// const fromDir = new THREE.Vector3(0, 0, 1)
// const toDir = new THREE.Vector3(1, 0, 0).normalize()
// const q = new THREE.Quaternion().setFromUnitVectors(fromDir, toDir)

/**
 * incremental local rotation
 *
 * object.rotateY(angle) is basically applying a quaternion around local Y.
 */

/**
 * copy/clone
 */

// const qCopy = mesh.quaternion.clone()
