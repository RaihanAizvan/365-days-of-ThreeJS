// day 81 — fixing shadow acne basics

import * as THREE from 'three';

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.castShadow = true;

// 1. the classic bias
// Negative values push the shadow away from the light.
// Values are extremely small (e.g. 0.001 to 0.005).
// Too large? "Peter-panning" (shadow detaches from the object).
dirLight.shadow.bias = -0.001;

// 2. the modern normalBias
// Offsets the testing surface strictly outward based on its curvature.
// This is the absolute best way to fix acne on spheres and cylinders without detaching shadows.
// Values here are typically positive and slightly larger (e.g., 0.02 to 0.05).
dirLight.shadow.normalBias = 0.02;

scene.add(dirLight);

console.log('use normalBias for curved surfaces like spheres, use standard bias for flat planes.');
