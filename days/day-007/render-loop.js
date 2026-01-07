/**
 * frame concept
 *
 * a frame represents one moment in time
 * graphics are updated by drawing many frames
 *
 * most screens update around sixty times per second
 */

/**
 * example state
 *
 * this represents the current state of the world
 */
let state = {
  x: 0,
  y: 0
}

/**
 * updating state
 *
 * each frame can change values slightly
 */
function update() {
  state.x = state.x + 1
}
