// day 88 — custom points basics

import * as THREE from 'three';

const count = 500; // 500 total particles

// 1. Create the blank, empty geometry structure
const geometry = new THREE.BufferGeometry();

// 2. Allocate the exact amount of memory needed
// 500 particles * 3 axes (xyz) = 1500 slots
const positionsArray = new Float32Array(count * 3);

// 3. Fill the memory with data! 
// We multiply by 3 to skip ahead to the next particle's X slot.
for (let i = 0; i < count; i++) {
    const stride = i * 3;

    // X
    positionsArray[stride + 0] = (Math.random() - 0.5) * 10;
    // Y
    positionsArray[stride + 1] = (Math.random() - 0.5) * 10;
    // Z
    positionsArray[stride + 2] = (Math.random() - 0.5) * 10;
}

// 4. Inject it into the Geometry
// "Read the array in chunks of 3"
const attributeCube = new THREE.BufferAttribute(positionsArray, 3);
geometry.setAttribute('position', attributeCube);

// 5. Render it
const material = new THREE.PointsMaterial({ size: 0.1 });
const points = new THREE.Points(geometry, material);

// scene.add(points);

console.log('you have successfully built a massive object from raw numbers.');
