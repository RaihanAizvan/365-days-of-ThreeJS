/**
 * day 28 - interaction loops
 */

/**
 * interaction loop = input + update + render
 *
 * 1) input events update some state (mouse position, keys held)
 * 2) the animation loop reads that state
 * 3) the loop updates the scene
 * 4) render
 */

/**
 * why not update everything inside input handlers?
 *
 * input events can fire at unpredictable rates.
 *
 * if you do heavy work in handlers, you:
 * - create jank
 * - mix input + render logic
 *
 * better: handlers store state, loop consumes it.
 */

/**
 * keyboard patterns
 *
 * use keydown/keyup to set flags:
 *   keys['w'] = true/false
 */

/**
 * pointer patterns
 *
 * store normalized pointer positions:
 *   pointer.x = (event.clientX / width) * 2 - 1
 *   pointer.y = -(event.clientY / height) * 2 + 1
 */

/**
 * debouncing / throttling
 *
 * for expensive input (resize), debounce.
 * for high-rate input, just store state.
 */
