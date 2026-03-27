// day 87 — particle theory

/**
 * ditching the polygons
 * 
 * 1. The Limitation of Meshes
 *    - A standard `THREE.Mesh` requires a Geometry (vertices) and a Material.
 *    - The GPU is instructed to draw triangles connecting these vertices.
 *    - If you want 10,000 stars, making 10,000 SphereGeometries requires 10,000 draw calls. 
 *      This will obliterate your frame rate.
 * 
 * 2. Enter THREE.Points
 *    - `THREE.Points` is an object that takes a Geometry, but actively ignores the triangles/faces!
 *    - Instead, it tells the GPU: "For every single vertex in this geometry, draw a perfectly flat 2D square facing the camera."
 *    - Because it is drawn in a single optimized pass, you can easily render 1,000,000 particles at 60fps.
 * 
 * 3. The Shape of Points
 *    - By default, particles rendered mathematically by the GPU are perfectly square.
 *    - In the coming days, we will learn how to map textures (like glowing circles or snowflakes) 
 *      onto these squares using the alpha channel.
 */

console.log('particles are basically just the naked vertices of a geometry rendered as tiny billboards.');
