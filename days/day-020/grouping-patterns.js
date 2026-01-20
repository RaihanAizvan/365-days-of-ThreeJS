/**
 * day 20 - grouping logic
 */

/**
 * pattern 1: pivot group (orbiting)
 *
 * you want object to orbit around a point.
 * instead of doing trig each frame, you can:
 * - create a pivot group at the orbit center
 * - place the object at an offset from pivot
 * - rotate pivot
 */

// const pivot = new THREE.Group()
// scene.add(pivot)
//
// mesh.position.x = 2
// pivot.add(mesh)
//
// // orbit
// pivot.rotation.y += 0.01

/**
 * pattern 2: separate transforms (movement vs visual scale)
 *
 * scaling a parent also scales child spacing.
 * if you only want to scale the visual mesh, separate it:
 *
 * mover (position/rotation)
 *  - visual (scale)
 *  - other children (not affected by visual scale)
 */

/**
 * pattern 3: logical grouping
 *
 * group objects by meaning:
 * - player
 * - enemies
 * - environment
 * - ui
 *
 * then you can show/hide or transform whole categories.
 */

/**
 * pattern 4: prefab factory
 *
 * write functions that return a group.
 *
 * function createTree() { return group }
 *
 * this is how you keep scenes from turning into a giant file.
 */

/**
 * naming
 *
 * mesh.name = 'wheelFL'
 * group.name = 'car'
 *
 * names help debugging (and raycasting later).
 */
