// day 83 — helper initialization basics

import * as THREE from 'three';

// 1. The camera we actually want to debug (e.g. for a minimap or a specific shot)
const targetCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
targetCamera.position.set(0, 5, 10);

// 2. The Helper
const helper = new THREE.CameraHelper(targetCamera);
scene.add(helper);

// 3. The spectator camera (the one we look through to see the targetCamera and its helper)
const spectatorCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
spectatorCamera.position.set(15, 15, 15);
spectatorCamera.lookAt(0, 0, 0);

// 4. Modifying and updating
// When properties change, the helper must be informed.
targetCamera.fov = 90;
targetCamera.updateProjectionMatrix();

// Essential: sync the helper lines with the newly calculated matrix!
helper.update();

// When rendering, we render from the spectator's view to see the helper
// renderer.render(scene, spectatorCamera);

console.log('never forget to call helper.update() after touching FOV, near, or far planes.');
