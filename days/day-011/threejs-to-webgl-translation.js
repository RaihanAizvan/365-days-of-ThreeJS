/**
 * how a Mesh becomes webgl work (conceptually)
 *
 * not exact internal code, but the order of ideas is right.
 */

/**
 * inputs (your side)
 */
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

/**
 * at render time
 *
 * renderer.render(scene, camera) roughly does:
 * 1) update matrices (world transforms)
 * 2) collect visible objects (frustum culling)
 * 3) for each visible mesh:
 *    - ensure geometry is uploaded (buffers)
 *    - ensure material program exists (compile/link shader program)
 *    - bind program
 *    - bind geometry buffers (vertex attrib pointers)
 *    - set uniforms (matrices, colors, lights)
 *    - bind textures
 *    - gl.drawElements / gl.drawArrays
 */

/**
 * why the first frame can be slow
 *
 * shader compilation + buffer uploads can happen on first use.
 * this is why apps sometimes "stutter" the first time a material appears.
 */

/**
 * why changing materials a lot is expensive
 *
 * different materials can mean:
 * - different shaders
 * - different uniforms
 * - different textures
 *
 * each switch tends to increase state changes.
 */

/**
 * debugging tip
 *
 * three js has a lot of renderer info:
 * - renderer.info.render.calls (draw calls)
 * - renderer.info.render.triangles
 * - renderer.info.memory.geometries / textures
 */

// console.log(renderer.info)
