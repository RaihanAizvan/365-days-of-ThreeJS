/**
 * buffergeometry tips
 */

/**
 * update attributes
 *
 * if you mutate an attribute array, set:
 *   attribute.needsUpdate = true
 */

/**
 * dynamic usage
 *
 * for frequently-updated attributes:
 *   attribute.setUsage(THREE.DynamicDrawUsage)
 */

/**
 * compute normals
 *
 * when you change positions, normals may be invalid.
 * use geometry.computeVertexNormals().
 */
