// day 73 — light target basics

import * as THREE from 'three';

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);

// create a dummy object to act as a target
const targetObject = new THREE.Object3D();
targetObject.position.set(5, 0, 0); // point at (5,0,0) instead of origin
scene.add(targetObject);

directionalLight.target = targetObject;

scene.add(directionalLight);

/**
 * important:
 * for the target property to work, the target object MUST be in the scene.
 */

console.log('use light.target to direct the sun rays precisely.');
