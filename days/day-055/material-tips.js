/**
 * material usage tips
 */

/**
 * use MeshStandardMaterial for most objects.
 * 
 * best balance of quality and performance.
 * works with all light types.
 */

/**
 * use MeshBasicMaterial for UI and unlit objects.
 * 
 * no lighting needed.
 * faster than lit materials.
 */

/**
 * avoid DoubleSide when possible.
 * 
 * doubles fragment shader cost.
 * use only when necessary (planes, leaves).
 */

/**
 * transparency is expensive.
 * 
 * requires sorting and extra passes.
 * use sparingly.
 */

/**
 * share materials between meshes.
 * 
 * const material = new THREE.MeshStandardMaterial()
 * mesh1.material = material
 * mesh2.material = material
 */

/**
 * update materials efficiently.
 * 
 * material.needsUpdate = true  // only when changing properties that require recompilation
 * color changes don't need needsUpdate
 */

/**
 * material disposal.
 * 
 * material.dispose()
 * prevents memory leaks when removing materials
 */
