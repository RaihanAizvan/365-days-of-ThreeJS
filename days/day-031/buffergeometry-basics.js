/**
 * day 31 - buffergeometry basics
 */

/**
 * BufferGeometry stores vertex data in typed arrays.
 *
 * Each attribute has:
 * - array (Float32Array, Uint16Array, etc)
 * - itemSize (components per vertex)
 */

/**
 * common attributes
 * - position: itemSize=3 (x, y, z)
 * - normal: itemSize=3
 * - uv: itemSize=2
 */

/**
 * example: custom triangle
 */

// const geometry = new THREE.BufferGeometry()
// const positions = new Float32Array([
//   0, 1, 0,
//   -1, -1, 0,
//   1, -1, 0
// ])
// geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
// geometry.computeVertexNormals()

/**
 * index buffer
 *
 * geometry.setIndex([...]) lets you reuse vertices.
 * reduces memory when triangles share vertices.
 */
