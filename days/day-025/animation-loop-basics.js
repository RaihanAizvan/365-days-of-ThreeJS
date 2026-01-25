/**
 * day 25 - animation loop
 */

/**
 * requestAnimationFrame
 *
 * requestAnimationFrame(fn) schedules fn to run before the next repaint.
 * the browser tries to call it ~60 times per second (depends on display).
 */

/**
 * the core loop pattern
 *
 * function tick() {
 *   // update state
 *   renderer.render(scene, camera)
 *   requestAnimationFrame(tick)
 * }
 * tick()
 */

/**
 * delta time (dt)
 *
 * frame times are not constant.
 *
 * if you move something by a fixed amount per frame:
 *   x += 0.1
 * then fast computers move faster (more frames).
 *
 * instead use dt:
 *   x += speed * dt
 */

/**
 * measuring time
 *
 * options:
 * - performance.now() (milliseconds)
 * - THREE.Clock (seconds)
 */

/**
 * variable timestep vs fixed timestep
 *
 * variable timestep (common in three js demos):
 * - use dt from the real frame time
 * - simple, good for visuals
 *
 * fixed timestep (common in physics):
 * - advance simulation in fixed steps (e.g. 1/60)
 * - more stable and deterministic
 *
 * you can combine them:
 * - fixed timestep simulation
 * - render interpolation
 */

/**
 * pausing
 *
 * pause means you stop updating time-driven state.
 * you can still render, but usually you stop the loop.
 */
