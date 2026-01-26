/**
 * THREE.Clock notes
 */

/**
 * usage
 */

// const clock = new THREE.Clock()
//
// function tick() {
//   const dt = clock.getDelta() // seconds since last call
//   const elapsed = clock.getElapsedTime() // seconds since start
// }

/**
 * pausing with THREE.Clock
 *
 * three js clock has:
 * - clock.start()
 * - clock.stop()
 *
 * but many people still manage pause with their own boolean + dt=0.
 */
