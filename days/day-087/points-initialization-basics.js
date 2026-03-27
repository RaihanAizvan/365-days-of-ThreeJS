// day 87 — points initialization basics

import * as THREE from 'three';

// 1. The Geometry
// We can use any standard geometry. A BoxGeometry with 10 segments  
// per side creates a lattice of 10x10x10 vertices.
const geometry = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);

// 2. The Material
// Particles CANNOT use MeshStandardMaterial or MeshBasicMaterial.
// They require a special material that dictates the size of the points.
const material = new THREE.PointsMaterial({
    size: 0.1,    // The physical size of the particle
    color: 0xffcc00 // The color of the particle
});

// 3. The Object
// Instead of `new THREE.Mesh()`, we explicitly use `THREE.Points()`.
const particles = new THREE.Points(geometry, material);

scene.add(particles);

console.log('you just spawned thousands of particles in a perfect cubic grid!');
