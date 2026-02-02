/**
 * index buffer tips
 */

/**
 * vertex count
 *
 * indexed:
 * - positions length / 3 = vertex count
 * - indices length / 3 = triangle count
 */

/**
 * convert to non-indexed
 *
 * geometry = geometry.toNonIndexed()
 *
 * useful for per-face operations (like unique normals per face).
 */

/**
 * convert to indexed
 *
 * BufferGeometryUtils.mergeVertices can create an index.
 * (requires duplicates with matching positions.)
 */
