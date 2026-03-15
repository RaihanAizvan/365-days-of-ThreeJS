// day 75 — spot light basics

import * as THREE from 'three';

const color = 0xffffff;
const intensity = 50; // high intensity for decay:2
const distance = 0; // infinite
const angle = Math.PI / 4; // 45 degrees
const penumbra = 0.5; // halfway soft edge
const decay = 2; // physical decay

const spotLight = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
spotLight.position.set(2, 5, 2);

// Aiming the spotlight
const targetObject = new THREE.Object3D();
targetObject.position.set(0, 0, 0); // Aim at origin
scene.add(targetObject); // MUST be in scene
spotLight.target = targetObject;

scene.add(spotLight);

/**
 * Visual Helpers
 * - `THREE.SpotLightHelper` helps visualize the cone volume.
 */
// const helper = new THREE.SpotLightHelper(spotLight);
// scene.add(helper);

console.log('Math.PI / 6 gives a nice narrow beam (30 degrees).');
