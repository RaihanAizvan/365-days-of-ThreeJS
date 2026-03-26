// day 85 — lightmap import basics

import * as THREE from 'three';

const loader = new THREE.TextureLoader();

// 1. Load your standard textures
const colorTex = loader.load('path/to/diffuse.jpg');

// 2. Load the lightmap exported from Blender
const bakedLightTex = loader.load('path/to/lightmap.jpg');
// It's critical not to use sRGB encoding on lightmaps, they contain linear light data!
// Note: as of recent three.js versions, Texture encoding is handled via colorSpace. Default NoColorSpace is often correct for lightmaps unless explicitly exported otherwise.

const material = new THREE.MeshStandardMaterial({
    map: colorTex,
    lightMap: bakedLightTex,
    lightMapIntensity: 1.0 // You can dial the baked light up or down dynamically!
});

// 3. The geometry MUST HAVE a uv2 attribute for the lightmap to lay out correctly.
const geometry = new THREE.BoxGeometry(1, 1, 1);
// If your geometry is procedurally generated in Three.js, you can duplicate the default uv to uv2:
geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

console.log('three.js automatically multiplies the map color by the lightMap intensity.');
