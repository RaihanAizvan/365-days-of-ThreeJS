/**
 * translating gpu architecture to three js knobs
 *
 * this file is a cheat sheet: symptom -> likely cause -> what to try.
 */

/**
 * symptom: fps drops as resolution increases
 * likely: gpu fill-rate bound (too many pixels shaded)
 * try:
 * - cap pixel ratio: renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
 * - reduce postprocessing passes
 * - avoid huge transparent layers / particles
 */

/**
 * symptom: fps drops as # of objects increases (even if small)
 * likely: cpu bound / draw-call bound
 * try:
 * - merge static geometry
 * - use InstancedMesh for repeated objects
 * - reuse materials (fewer unique shader programs)
 */

/**
 * symptom: memory usage climbs
 * likely: gpu resources not disposed
 * try:
 * - geometry.dispose(), material.dispose(), texture.dispose()
 * - remove references so GC can collect js objects too
 */

/**
 * note on transparency
 *
 * transparent objects are usually drawn after opaque.
 * they often cannot use the same depth optimizations and cause overdraw.
 */
