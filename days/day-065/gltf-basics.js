// day 65 — gltf basics

/**
 * GLTF (Graphics Language Transmission Format)
 * 
 * why gltf?
 * - optimized for the web (fast loading, small file size).
 * - standard support for PBR (Physically Based Rendering) materials.
 * - contains the entire scene graph (nodes, meshes, lights, cameras).
 * 
 * loading workflow:
 * 1. instantiate GLTFLoader.
 * 2. call .load(url, successCallback).
 * 3. add gltf.scene to your THREE.Scene.
 */

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

// basic usage:
// loader.load('model.gltf', (gltf) => {
//     const model = gltf.scene;
//     scene.add(model);
// });

console.log('GLTF is the standard format for 3D assets on the web.');
