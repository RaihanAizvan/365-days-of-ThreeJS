// day 71 — point light falloff

import * as THREE from 'three';

/**
 * Creating a Physically Correct Point Light
 */

const intensity = 15; // in Candela (cd)
const color = 0xffffff;
const distance = 0;   // infinite range
const decay = 2;      // physically accurate (inverse square)

const pointLight = new THREE.PointLight(color, intensity, distance, decay);
pointLight.position.set(2, 2, 2);

// note: in newer versions of three.js, renderer.useLegacyLights is false by default.
// this means you likely need higher intensity values than you did in older tutorials.

console.log('decay: 2 is the magic number for realism.');
