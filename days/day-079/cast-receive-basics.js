// day 79 — cast and receive basics

import * as THREE from 'three';

// 1. You MUST enable it globally on the renderer!
// (This is the most common step people miss)
// renderer.shadowMap.enabled = true;

// 2. The light must be permitted to cast
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.castShadow = true;

// 3. The object floating in the air must cast a shadow
const floatingCube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
floatingCube.castShadow = true; // Projects darkness out

// 4. The ground must be permitted to receive the shadow
const groundPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
);
groundPlane.receiveShadow = true; // Accepts darkness projected onto it

// wait, can an object both cast AND receive?
// yes! a self-shadowing complex object or a staircase requires both.
// floatingCube.receiveShadow = true; 

console.log('castShadow and receiveShadow are discrete independent properties on the Mesh.');
