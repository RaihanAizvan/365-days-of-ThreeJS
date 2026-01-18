/**
 * scale pitfalls + patterns
 */

/**
 * pitfall: scaling the parent also scales child spacing
 *
 * if you want a parent to be bigger but keep child spacing the same,
 * you might need to reorganize your hierarchy:
 *
 * Group (position/orientation)
 *  - Mesh (scaled)
 *  - Child objects (not under the scaled mesh)
 */

/**
 * pitfall: non-uniform scaling + rotation
 *
 * non-uniform scale combined with rotation can create shearing-like effects.
 * (it is still an affine transform, but it can surprise you visually.)
 */

/**
 * pitfall: negative scale + culling
 *
 * if faces disappear after mirroring, it is usually backface culling.
 */

/**
 * pattern: use separate groups
 *
 * - group for movement/rotation
 * - mesh for visual scale
 */
