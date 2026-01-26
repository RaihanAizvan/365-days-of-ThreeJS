/**
 * day 26 - clock mechanisms
 */

/**
 * two common time sources
 *
 * 1) performance.now()
 * - built-in browser timer (milliseconds)
 * - high resolution
 *
 * 2) THREE.Clock
 * - convenience helper (seconds)
 * - has getElapsedTime() and getDelta()
 */

/**
 * delta time (dt)
 *
 * dt = time since last frame.
 *
 * dt is useful for frame-rate independent movement:
 *   position += speed * dt
 */

/**
 * elapsed time
 *
 * elapsed = time since start.
 *
 * elapsed is useful for periodic motion:
 *   y = sin(elapsed)
 */

/**
 * clamping dt
 *
 * sometimes dt spikes (tab switched, debugger pause).
 * if you apply a huge dt to movement, objects teleport.
 *
 * solution:
 *   dt = Math.min(dt, maxDt)
 */

/**
 * pause / resume
 *
 * simplest approach:
 * - stop updating state when paused
 * - keep rendering if you want UI
 *
 * if you use performance.now(), also reset previous timestamp when resuming.
 */

/**
 * time scale (slow motion)
 *
 * apply a multiplier to dt:
 *   scaledDt = dt * timeScale
 *
 * timeScale:
 * - 1.0 = normal
 * - 0.5 = half speed
 * - 2.0 = double speed
 */
