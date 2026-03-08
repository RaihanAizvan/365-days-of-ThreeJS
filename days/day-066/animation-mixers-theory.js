// day 66 — animation mixers theory

/**
 * Three.js Animation System
 * 
 * 1. AnimationClip
 *    - Reusable set of keyframe tracks.
 *    - Found in `gltf.animations` array after loading.
 * 
 * 2. AnimationMixer
 *    - The player. One mixer per animated object (usually the `gltf.scene`).
 *    - Requires an update in every frame: `mixer.update(deltaTime)`.
 * 
 * 3. AnimationAction
 *    - Controls the playback of a clip on the mixer.
 *    - Methods: `.play()`, `.stop()`, `.fadeIn()`, `.setLoop()`.
 */

import * as THREE from 'three';

// hypothetical usage:
// const mixer = new THREE.AnimationMixer(gltf.scene);
// const action = mixer.clipAction(gltf.animations[0]);
// action.play();

// loop:
// mixer.update(clock.getDelta());

console.log('AnimationMixer is the engine that drives GLTF animations in Three.js.');
