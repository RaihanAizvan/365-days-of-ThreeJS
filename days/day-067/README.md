# day 67 skinned meshes & bones

today is about **Skinned Meshes** and the **Skeletal system** in Three.js. This is the foundation for character animation and complex deformations.

while `GLTFLoader` abstracts much of this away, understanding how it works under the hood is critical for troubleshooting "exploding meshes" and manual rigging.

key topics:
- `THREE.SkinnedMesh`: a special mesh that can be deformed by a skeleton.
- `THREE.Skeleton`: a collection of bones that control the mesh.
- `THREE.Bone`: a node in a hierarchy that defines a transformation.
- **skins & weights**: attributes in the geometry that tell vertices which bones affect them and by how much.

goal:
- understand the relationship between a mesh and its skeleton.
- create a simple procedurally rigged mesh.
- visualize bone hierarchies.

## runnable demo

a demo exists in `days/day-067/demo`.

with vite:
- `npm run dev`
- open `/days/day-067/demo/index.html`
