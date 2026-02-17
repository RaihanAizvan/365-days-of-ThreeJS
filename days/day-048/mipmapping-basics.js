/**
 * day 48 - mipmapping logic
 */

/**
 * mipmaps
 *
 * a chain of smaller textures: 1/2, 1/4, 1/8...
 * generated automatically for power-of-two textures.
 */

/**
 * why
 *
 * - reduces aliasing when textures get small on screen
 * - improves cache usage
 */

/**
 * minification filters
 *
 * - NearestFilter (no mipmaps)
 * - LinearFilter (no mipmaps)
 * - LinearMipMapLinearFilter (uses mipmaps)
 */

/**
 * note
 *
 * mipmaps require power-of-two textures.
 */
