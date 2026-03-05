// day 64 — equirectangular basics

/**
 * cube maps vs equirectangular:
 * 
 * cube maps: 6 separate square images. great for skyboxes, but harder to capture/edit.
 * equirectangular: a single 2:1 ratio image (like a world map). 
 * 
 * mapping in Three.js:
 * texture.mapping = THREE.EquirectangularReflectionMapping;
 * 
 * this tells Three.js how to "wrap" the single image around the scene inside a sphere.
 */

import * as THREE from 'three';

const setupMapping = (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    return texture;
};

console.log('equirectangular maps are the industry standard for HDR environments.');
