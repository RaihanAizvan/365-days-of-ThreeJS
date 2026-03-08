// day 67 — skinned meshes theory

/**
 * How Skinning Works
 * 
 * 1. Vertex Attributes:
 *    - `skinIndex`: An array of 4 indices per vertex, pointing to bones in the Skeleton.
 *    - `skinWeight`: An array of 4 weights per vertex (0 to 1), defining how much each bone influences the vertex.
 *    - Total weight should ideally sum to 1.0.
 * 
 * 2. Skeleton Hierarchy:
 *    - Bones are just `Object3D` nodes arranged in a tree.
 *    - When a parent bone moves, child bones follow.
 * 
 * 3. Bind Matrices:
 *    - The "Bind Pose" is the neutral state of the mesh.
 *    - `boneInverses` are matrices used to "reset" the mesh relative to bone movement.
 * 
 * 4. SkinnedMesh vs Mesh:
 *    - `SkinnedMesh` has a `.skeleton` property.
 *    - It uses a special shader that transforms vertices based on bone matrices before rendering.
 */

console.log('SkinnedMesh is the bridge between a static geometry and a dynamic skeleton.');
