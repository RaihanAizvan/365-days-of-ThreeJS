/**
 * day 29 - viewport scaling
 */

/**
 * canvas size vs drawing buffer size
 *
 * - CSS size: how big the canvas appears on the page
 * - drawing buffer: how many pixels the GPU renders
 *
 * renderer.setSize(w, h) sets drawing buffer size and canvas style by default.
 */

/**
 * pixel ratio
 *
 * devicePixelRatio can be > 1 on high-DPI displays.
 *
 * renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
 * gives sharper output without blowing up GPU cost too much.
 */

/**
 * resize handling
 *
 * when the canvas resizes:
 * - update renderer size
 * - update pixel ratio
 * - update camera aspect + projection matrix
 */

/**
 * viewport
 *
 * renderer.setViewport(x, y, width, height)
 *
 * by default it matches the canvas size.
 *
 * viewport changes how the scene is projected into the canvas.
 */

/**
 * scissor
 *
 * renderer.setScissor(x, y, width, height)
 *
 * used for multiple viewports in one canvas.
 */
