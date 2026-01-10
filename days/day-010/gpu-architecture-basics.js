/**
 * day 10 - gpu architecture
 *
 * the point of this day is performance intuition.
 * if you know what the gpu is optimized for, three js design choices make sense.
 */

/**
 * cpu vs gpu (high level)
 *
 * cpu:
 * - good at complex branching logic
 * - runs your javascript
 * - prepares data and issues commands
 *
 * gpu:
 * - good at doing the same operation on lots of data in parallel
 * - runs shaders (small programs) over many vertices/pixels
 * - turns triangles into pixels
 */

/**
 * the frame story
 *
 * every frame you have two broad costs:
 * 1) cpu time: build the scene, do culling, update animations, issue draw calls
 * 2) gpu time: actually rasterize and shade pixels
 *
 * you can be cpu-bound (too many objects / draw calls)
 * or gpu-bound (too many pixels / expensive shading)
 */

/**
 * simplified pipeline
 *
 * 1) vertex fetch
 *    - gpu reads vertex attributes from buffers (positions, normals, uvs)
 * 2) vertex shader
 *    - runs once per vertex
 *    - outputs clip-space position (after model/view/projection transforms)
 * 3) primitive assembly + clipping
 *    - triangles are formed and clipped to the view
 * 4) rasterization
 *    - triangles become fragments (candidate pixels)
 * 5) fragment shader
 *    - runs once per fragment (pixel-ish)
 *    - computes color (and maybe writes depth)
 * 6) tests + blending
 *    - depth test (occlusion), stencil, blending (transparency)
 * 7) framebuffer write
 *    - final pixels written to the canvas backbuffer
 */

/**
 * parallelism intuition
 *
 * vertex and fragment shaders run across huge batches.
 * they are fast when they do predictable math with minimal branching.
 */

/**
 * why draw calls are expensive
 *
 * a draw call is when the cpu tells the gpu:
 * "use this program, these buffers, these textures, and draw N triangles".
 *
 * the gpu is fast, but the cpu->gpu communication and state changes have overhead.
 *
 * common causes of too many draw calls in three js:
 * - many separate meshes/materials
 * - lots of unique materials that prevent batching
 * - not using instancing for repeated objects
 */

/**
 * bandwidth: moving data is often the bottleneck
 *
 * uploading big buffers/textures each frame is slow.
 * best practice: create geometry once, then only update what you must.
 *
 * in three js:
 * - prefer reusing geometries/materials
 * - avoid creating new objects every frame in hot loops
 */

/**
 * fill rate: the cost of shading pixels
 *
 * gpu time increases with:
 * - screen resolution (more pixels)
 * - overdraw (drawing pixels that get covered later)
 * - heavy fragment shaders (complex lighting, many texture reads)
 *
 * this is why:
 * - pixel ratio is capped (devicePixelRatio can be huge)
 * - transparency can be expensive (blending + overdraw)
 */

/**
 * depth testing and early-z
 *
 * depth buffer lets the gpu reject fragments behind other geometry.
 * drawing front-to-back can reduce wasted fragment shader work.
 */

/**
 * what this means for three js
 *
 * three js helps by:
 * - caching programs and state
 * - sorting objects (opaque vs transparent)
 * - reducing redundant state changes
 *
 * but you still need to:
 * - keep draw calls reasonable
 * - keep resolution / pixel ratio reasonable
 * - dispose gpu resources
 */

/**
 * quick rules of thumb
 *
 * if performance is bad:
 * - lower pixel ratio => helps gpu-bound cases
 * - reduce # of meshes/materials => helps cpu-bound draw-call cases
 * - reduce lights/shadows/postprocessing => usually helps gpu
 */
