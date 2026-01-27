/**
 * day 27 - frame deltas
 */

/**
 * dt = delta time = time since last frame
 *
 * dt is never perfectly constant.
 * even on a 60hz screen, there will be jitter.
 */

/**
 * why dt fluctuates
 *
 * - OS scheduling
 * - browser work (layout, GC)
 * - gpu workload
 * - different monitors (60/120/144hz)
 */

/**
 * spikes
 *
 * if the tab is backgrounded, dt can be huge.
 * applying huge dt to simulation causes teleporting.
 *
 * clamp:
 *   dt = Math.min(dt, maxDt)
 */

/**
 * smoothing
 *
 * smoothing dt can reduce visible jitter.
 *
 * simple exponential smoothing:
 *   smoothDt = lerp(smoothDt, dt, alpha)
 *
 * but smoothing adds lag and can hide real performance problems.
 */

/**
 * fixed timestep vs variable timestep (again)
 *
 * if you need stable simulation (physics):
 * - use fixed timestep and an accumulator
 *
 * for visuals:
 * - variable dt is usually fine
 */
