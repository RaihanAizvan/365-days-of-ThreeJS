// day 74 — point light instantiation basics

import * as THREE from 'three';

const color = 0xff9000;
const intensity = 30; // candelas (cd) in modern three.js physically-correct mode
const distance = 5; // the light will hit 0 intensity exactly at 5 units away. 0 means infinite.
const decay = 2; // inverse-square law dictates 2 as physically realistic.

const pointLight = new THREE.PointLight(color, intensity, distance, decay);
pointLight.position.set(0, 1, 0);

// enabling shadows
pointLight.castShadow = true;

// shadow mapping configuration for point lights
// point lights use PerspectiveCamera
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;
pointLight.shadow.camera.near = 0.5; // distance from light to start shadow calc
pointLight.shadow.camera.far = 10;   // distance from light to end shadow calc

console.log('tweaking the far plane of the point light shadow camera can optimize rendering if the light volume is small.');
