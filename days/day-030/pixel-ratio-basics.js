/**
 * day 30 - pixel ratios
 */

/**
 * devicePixelRatio
 *
 * window.devicePixelRatio tells you how many device pixels
 * map to one CSS pixel.
 *
 * examples:
 * - 1.0 => normal display
 * - 2.0 => retina (2x2 device pixels per CSS pixel)
 */

/**
 * why it matters
 *
 * higher pixel ratio => sharper image
 * but also more pixels to render, which costs GPU time.
 */

/**
 * typical pattern
 *
 * renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
 *
 * capping avoids extreme cost on very high DPI screens.
 */

/**
 * resizing
 *
 * after resize:
 * - update renderer size
 * - update pixel ratio
 * - update camera aspect + projection matrix
 */

/**
 * diagnosis
 *
 * if your scene looks blurry:
 * - check pixel ratio
 * - check canvas size vs CSS size
 */
