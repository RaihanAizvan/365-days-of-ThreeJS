/**
 * day 33 - index buffers
 */

/**
 * non-indexed geometry
 *
 * each triangle has unique vertices.
 * for a quad, you might store 6 vertices (2 triangles).
 */

/**
 * indexed geometry
 *
 * you store unique vertices once, and use an index array to reuse them.
 *
 * example: a quad can be 4 vertices + 6 indices.
 */

/**
 * in three js
 *
 * geometry.setIndex([0, 1, 2, 2, 3, 0])
 */

/**
 * benefits
 *
 * - less memory
 * - better vertex cache usage
 * - easier to edit shared vertices
 */

/**
 * tradeoffs
 *
 * some effects (like hard edges) may require duplicate vertices anyway.
 */
