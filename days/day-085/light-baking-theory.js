// day 85 — light baking theory

/**
 * trading math for memory
 * 
 * 1. Why Bake?
 *    - Real-time shadows (shadow maps) cost a minimum of 1 extra render pass per light.
 *    - Real-time global illumination (light bouncing off walls) is practically impossible for mobile chips.
 *    - If your environment (walls, floors, terrain) doesn't move, you don't need to recalculate its shadows every single frame!
 * 
 * 2. The Lightmap
 *    - Instead of doing the math in Three.js, you do the math in Blender (using Cycles renderer).
 *    - Blender spends 5 minutes tracing millions of rays, calculating perfect shadows and ambient occlusion.
 *    - It saves this result as a single JPG/PNG image.
 *    - In Three.js, you simply slap this image onto the model. Result: photorealism at 120fps with ZERO lights in the scene.
 * 
 * 3. The UV2 Requirement
 *    - A standard texture (like a brick wall) can tile or overlap. UV1 handles this.
 *    - A lightmap CANNOT tile or overlap. If the shadow of a tree is on the left wall, it cannot suddenly appear on the right wall.
 *    - Every single face of your geometry must have a unique coordinate on the image. This requires a second set of UVs, typically assigned to the `uv2` attribute in Three.js.
 */

console.log('baked lightmaps are the secret to mobile-friendly, photorealistic WebGL.');
