// day 80 — shadow map properties

import * as THREE from 'three';

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(10, 10, 10);
dirLight.castShadow = true;

// 1. Manually expanding the area where shadows can exist
// (DirectionalLight uses OrthographicCamera)
dirLight.shadow.camera.left = -10;
dirLight.shadow.camera.right = 10;
dirLight.shadow.camera.top = 10;
dirLight.shadow.camera.bottom = -10;

// 2. Controlling depth
// Only objects between near and far will cast shadows
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 50;

scene.add(dirLight);

// 3. THE MOST ESSENTIAL DEBUGGING TOOL
// This draws yellow lines in the scene showing exactly where the 
// light's shadow camera is looking.
const shadowCameraHelper = new THREE.CameraHelper(dirLight.shadow.camera);
scene.add(shadowCameraHelper);

console.log('always use a CameraHelper when setting up shadows for the first time.');
