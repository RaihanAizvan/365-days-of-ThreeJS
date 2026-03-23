// day 84 — orthographic boundaries basics

import * as THREE from 'three';

// 1. The Perspective Frustum (The "Pyramid")
const pCamera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 100);

// 2. The Orthographic Frustum (The "Box")
// Unlike perspective, orthographic cameras don't use FOV. 
// They are mathematically defined by literal coordinate boundaries.
const width = 10;
const height = 10;

const oCamera = new THREE.OrthographicCamera(
    -width / 2,  // Left
    width / 2,   // Right
    height / 2,  // Top
    -height / 2, // Bottom
    0.1,         // Near
    100          // Far
);

// 3. Forcing rendering
const myBigMesh = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial());

// Disables the bounding sphere frustum check (great for full-screen effects or shader-altered geometry)
myBigMesh.frustumCulled = false;

console.log('use OrthographicCamera when you need absolute uniform scale, like UI or isometric RPGs.');
