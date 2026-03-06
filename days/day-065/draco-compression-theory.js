// day 65 — draco compression theory

/**
 * what is draco?
 * - an open-source library for compressing and decompressing 3D geometric meshes and point clouds.
 * - it significantly reduces file size (up to 10x) but requires a decompression step on the client.
 * 
 * when to use it:
 * - for large, complex models with many vertices.
 * 
 * how to use in Three.js:
 * 1. export model with Draco compression (e.g., from Blender).
 * 2. use DRACOLoader alongside GLTFLoader.
 * 3. provide the path to the Draco decoder (usually in /public/draco).
 */

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/'); // specify the path to the decoder binaries

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

console.log('draco compression handles complex geometry efficiently at the cost of initial decode time.');
