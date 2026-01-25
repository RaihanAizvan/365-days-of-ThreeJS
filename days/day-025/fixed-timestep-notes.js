/**
 * fixed timestep notes (concept)
 */

/**
 * accumulator idea
 *
 * let accumulator = 0
 * let previous = performance.now()
 *
 * function tick(now) {
 *   const dt = (now - previous) / 1000
 *   previous = now
 *   accumulator += dt
 *
 *   const step = 1/60
 *   while (accumulator >= step) {
 *     simulate(step)
 *     accumulator -= step
 *   }
 *
 *   const alpha = accumulator / step
 *   render(alpha)
 *   requestAnimationFrame(tick)
 * }
 */

/**
 * you usually only need fixed timestep once you add physics.
 */
