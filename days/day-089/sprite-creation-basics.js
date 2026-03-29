// day 89 — sprite creation basics

import * as THREE from 'three';

// 1. Load an image or canvas to map onto the sprite
const loader = new THREE.TextureLoader();
// Let's pretend we have a glowing star PNG with an alpha channel
const map = loader.load('lensflare.png'); // Example path

// 2. We explicitly use SpriteMaterial
// Features: Supports color tinting, blending, and ignores lighting geometry.
const material = new THREE.SpriteMaterial({
    map: map,
    color: 0xffffff,
    // blending: THREE.AdditiveBlending // Highly common for glowing effects!
});

// 3. Instantiate the Sprite
// Unlike `new THREE.Mesh`, we don't supply a geometry!
// A sprite is inherently a 2D plane (mathematically it builds a PlaneGeometry behind the scenes).
const sprite = new THREE.Sprite(material);

// 4. Transform it
// The scale determines its actual size in world units (x=width, y=height, z=thickness).
// A sprite is 2D, so z-scale does nothing.
sprite.scale.set(5, 5, 1);
sprite.position.set(0, 10, 0);

scene.add(sprite);

console.log('If you orbit around the sprite, it will perfectly turn to face your camera at all times.');
