// day 84 — frustum culling theory

/**
 * the mechanics of visibility
 * 
 * 1. Frustum Culling (The automatic optimization)
 *    - Before rendering a frame, three.js calculates the bounding sphere of every object.
 *    - It checks if that geometrical sphere intersects with the camera's frustum volume.
 *    - If an object is "behind" the camera, or too far away, it is skipped entirely (not processed by WebGL).
 * 
 * 2. Overriding Culling
 *    - Very rarely, three.js might cull an object by mistake (e.g. vertices are animated vastly outside 
 *      their original bounding box via a shader).
 *    - You can force three.js to always render a mesh regardless of the camera's view:
 *      mesh.frustumCulled = false;
 * 
 * 3. The Depth Buffer Problem (Z-Fighting)
 *    - The space between the `.near` and `.far` planes represents 100% of the available depth decimals.
 *    - If you set near=0.0001 and far=999999, objects placed closely together (like a poster on a wall) 
 *      will mathematically occupy the exact same depth value, causing ugly flicker ("Z-fighting").
 *    - Golden Rule: Keep near/far planes as tightly bound to your scene as possible!
 */

console.log('if you want far-off mountains to render correctly, do not set your near plane to 0.00001');
