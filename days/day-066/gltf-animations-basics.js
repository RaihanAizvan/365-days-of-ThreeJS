// day 66 — gltf animations basics

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
let mixer = null;

loader.load('/path/to/model.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // 1. Create a mixer
    mixer = new THREE.AnimationMixer(model);

    // 2. Get an animation clip
    const clip = gltf.animations[0];

    // 3. Create an action and play it
    if (clip) {
        const action = mixer.clipAction(clip);
        action.play();
    }
});

// In the animation loop:
const clock = new THREE.Clock();
const tick = () => {
    const deltaTime = clock.getDelta();

    if (mixer) {
        mixer.update(deltaTime);
    }
}
