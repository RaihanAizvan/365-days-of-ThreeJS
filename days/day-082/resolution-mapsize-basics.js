// day 82 — map size & renderer types setup

import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();

// 1. Renderer Shadow Map Types
// THREE.BasicShadowMap     - fastest, unfiltered, very jagged
// THREE.PCFShadowMap       - default, basic filtering
// THREE.PCFSoftShadowMap   - smooth bilinear filtering (beautiful but expensive)
// THREE.VSMShadowMap       - variance shadowing (can leak light, complex setup)
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


const light = new THREE.DirectionalLight(0xffffff, 1);
light.castShadow = true;

// 2. Map Size 
// Default is 512x512.
// Usually 1024 or 2048 is the sweet spot for modern desktop web experiences.
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

// 3. Ensuring crisp edges
// Remember from Day 80, keep the physical camera area as tight as possible
// to maximize the usage of those 1024 pixels!
const d = 10;
light.shadow.camera.left = -d;
light.shadow.camera.right = d;
light.shadow.camera.top = d;
light.shadow.camera.bottom = -d;

scene.add(light);

console.log('combinations: 1024x1024 + PCFSoftShadowMap = cinematic shadows for most scenes.');
