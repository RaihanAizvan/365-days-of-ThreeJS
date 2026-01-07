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


/**
 * render step
 *
 * rendering means reading current state
 * and drawing it to the screen
 *
 * update changes data
 * render shows data
 */
function render() {
  const snapshot = {
    x: state.x,
    y: state.y
  }
}



/**
 * render loop
 *
 * a render loop repeats update and render
 * again and again
 *
 * this loop creates motion and interaction
 */
function loop() {
  update()
  render()
}

/**
 * imagine loop being called many times per second
 * this is how smooth visuals are created
 */

/**
 * relation to browser and three js
 *
 * browsers provide requestanimationframe
 * which runs a function before the next frame
 *
 * three js uses this internally
 * but the idea stays the same
 *
 * update state
 * render scene
 * repeat
 */
