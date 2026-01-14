/**
 * buffer geometry basics
 *
 * BufferGeometry is how three js stores vertex data.
 */

/**
 * attributes
 *
 * an attribute is a per-vertex array.
 *
 * common attributes:
 * - position: Float32Array (xyz xyz xyz ...)
 * - normal: Float32Array (xyz xyz xyz ...)
 * - uv: Float32Array (uv uv uv ...)
 */

/**
 * example: creating a custom triangle
 */

// const geometry = new THREE.BufferGeometry()
//
// const positions = new Float32Array([
//   0, 1, 0,   // vertex 0
//   -1, -1, 0, // vertex 1
//   1, -1, 0   // vertex 2
// ])
//
// geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
// geometry.computeVertexNormals()

/**
 * index buffer (optional)
 *
 * an index buffer lets you reuse vertices.
 *
 * instead of duplicating vertex data for each triangle,
 * you store an array of indices that point into the vertex array.
 *
 * this reduces memory usage for most meshes.
 */

/**
 * built-in geometries do all this for you
 *
 * BoxGeometry, SphereGeometry, etc are just convenient constructors
 * that build BufferGeometry with the correct attributes.
 */

/**
 * when to create custom geometry
 *
 * - procedural shapes (terrain, ribbons, custom meshes)
 * - importing vertex data from external formats
 * - dynamic geometry that changes every frame
 */
