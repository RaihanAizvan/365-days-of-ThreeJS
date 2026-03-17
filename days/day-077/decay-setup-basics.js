// day 77 — decay setup basics

import * as THREE from 'three';

// to compare different light decays, we can create an array of lights
const lights = [];

// 1. linear decay (old-school fading)
const linearLight = new THREE.PointLight(0xff0000, 20, 10, 1);
linearLight.position.set(-2, 1, 0);
lights.push(linearLight);

// 2. physical decay (the modern standard)
const physicalLight = new THREE.PointLight(0x00ff00, 200, 10, 2); // much brighter initially!
physicalLight.position.set(2, 1, 0);
lights.push(physicalLight);

// notice how physicalLight needs 200 candela to reach objects that linearLight can hit with just 20!

console.log('decay:1 drops slowly, decay:2 drops rapidly but fades infinitely into the distance.');
