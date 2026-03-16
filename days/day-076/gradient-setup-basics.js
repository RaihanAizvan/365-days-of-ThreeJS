// day 76 — gradient setup basics

import * as THREE from 'three';

const skyColor = 0xff0044; // neon pink
const groundColor = 0x0044ff; // neon blue
const intensity = 1.0;

const hemiLight = new THREE.HemisphereLight(skyColor, groundColor, intensity);

// default: the gradient runs along the Y axis (up/down).
// hemiLight.position.set(0, 1, 0); // (default)

// change the gradient direction to run horizontally (left/right)
// by setting the position to the right (X=1), the "sky" is right
// and the "ground" is left.
hemiLight.position.set(1, 0, 0);

scene.add(hemiLight);

console.log('rotate the position vector to aim the color blend.');
