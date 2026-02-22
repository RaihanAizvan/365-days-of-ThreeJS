/**
 * day 53 - texture transformations
 */

/**
 * texture offset
 *
 * texture.offset.set(x, y)
 * 
 * moves the texture by x and y in UV space.
 * range: 0 to 1 (or beyond with wrapping)
 */

/**
 * texture rotation
 *
 * texture.rotation = Math.PI / 4  // 45 degrees
 * 
 * rotates texture in radians.
 * default rotation center is (0, 0) bottom-left.
 */

/**
 * rotation center
 *
 * texture.center.set(0.5, 0.5)
 * 
 * sets the pivot point for rotation.
 * (0.5, 0.5) rotates around center.
 */

/**
 * combining transformations
 *
 * texture.repeat.set(2, 2)
 * texture.offset.set(0.25, 0.25)
 * texture.rotation = Math.PI / 6
 * texture.center.set(0.5, 0.5)
 */
