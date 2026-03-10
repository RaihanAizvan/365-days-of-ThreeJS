// day 69 — raycasting theory

/**
 * The Projection Problem
 * 
 * Your screen is 2D (pixels), but the world is 3D. 
 * To know what the user clicked, we must 'unproject' the mouse point 
 * back into the 3D frustum.
 * 
 * 1. Normalized Device Coordinates (NDC):
 *    - Mouse X: (event.clientX / window.innerWidth) * 2 - 1
 *    - Mouse Y: -(event.clientY / window.innerHeight) * 2 + 1
 *    - This maps the screen to a square from -1 to +1.
 * 
 * 2. The Ray:
 *    - An origin (camera position) and a direction (pointing 'through' the mouse pixel).
 * 
 * 3. Intersection Testing:
 *    - Three.js checks boundary volumes (boxes/spheres) first for speed, 
 *      then individual triangles if necessary.
 *    - Intersecting complex skinned meshes can be expensive!
 */

console.log('raycasting is the bridge between the 2d cursor and the 3d world.');
