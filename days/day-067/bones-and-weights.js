// day 67 — bones and weights

import * as THREE from 'three';

/**
 * Manually Rigging a Geometry
 * 
 * To create a skeleton manually:
 * 1. Create Bones and parent them.
 * 2. Add 'skinIndex' and 'skinWeight' attributes to your BufferGeometry.
 * 3. Create a Skeleton from the bones.
 * 4. Create a SkinnedMesh and bind it.
 */

// Example structure for a 2-bone armature
const root = new THREE.Bone();
const child = new THREE.Bone();
root.add(child);
child.position.y = 2;

const skeleton = new THREE.Skeleton([root, child]);

// Vertex weighting example (BufferGeometry attributes)
// const skinIndices = [];
// const skinWeights = [];
// skinIndices.push(0, 0, 0, 0); // All vertices influenced by bone 0
// skinWeights.push(1, 0, 0, 0);  // 100% influence from bone 0

console.log('Bones move, but Weights decide who follows.');
