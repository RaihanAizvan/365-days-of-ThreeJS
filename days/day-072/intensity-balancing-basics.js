// day 72 — intensity balancing basics

import * as THREE from 'three';

// 1. the "flat" way (pure ambient)
// const ambient = new THREE.AmbientLight(0xffffff, 0.5);

// 2. the "natural" way (hemisphere)
const skyColor = 0xb1e1ff; // light blue
const groundColor = 0xb97a20; // brownish
const intensity = 0.6;

const hemisphereLight = new THREE.HemisphereLight(skyColor, groundColor, intensity);

/**
 * balancing tip:
 * total "base" intensity should rarely exceed 0.5 if you want your 
 * directional highlights to stand out.
 */

console.log('hemisphere lights add subtle color variation to shadows.');
