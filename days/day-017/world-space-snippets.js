/**
 * world-space snippets
 */

/**
 * get world position
 */

// const world = new THREE.Vector3()
// mesh.getWorldPosition(world)

/**
 * converting directions
 *
 * sometimes you want a direction in world space.
 * you can use:
 * - mesh.getWorldDirection(dir)
 */

// const dir = new THREE.Vector3()
// mesh.getWorldDirection(dir)

/**
 * note
 *
 * three js caches matrices.
 * if you manually change many transforms and need world data immediately,
 * you can force an update:
 * - object.updateMatrixWorld(true)
 */
