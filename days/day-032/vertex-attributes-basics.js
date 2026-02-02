/**
 * day 32 - vertex attributes
 */

/**
 * an attribute is a typed array plus itemSize.
 *
 * example: position has 3 numbers per vertex (x,y,z):
 *   new Float32Array([x1,y1,z1, x2,y2,z2, ...])
 */

/**
 * creating a custom attribute
 */

// const colors = new Float32Array([
//   1, 0, 0,
//   0, 1, 0,
//   0, 0, 1
// ])
// geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

/**
 * itemSize
 *
 * itemSize tells the GPU how many numbers make a single vertex attribute.
 * - position: itemSize = 3
 * - uv: itemSize = 2
 */

/**
 * updating attributes
 *
 * - mutate the array
 * - set attribute.needsUpdate = true
 */
