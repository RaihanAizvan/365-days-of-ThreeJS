import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 087: Particle Basics Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#050510');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 8);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.0;

// === PARTICLE SETUP ===

// The secret to using native geometry as particles is high segmentation!
const geometries = {
    'sphere': new THREE.SphereGeometry(3, 32, 32),
    'torus': new THREE.TorusKnotGeometry(2, 0.5, 150, 20),
    'box': new THREE.BoxGeometry(4, 4, 4, 15, 15, 15)
};

// Crucial: We use PointsMaterial, which exposes a 'size' parameter.
// Note: PointsMaterial is totally unaffected by lights by default!
const material = new THREE.PointsMaterial({
    size: 0.05,
    color: '#ffeb3b',
    // sizeAttenuation determines if particles get smaller as they recede into the distance.
    // Setting it to 'false' makes every particle EXACTLY the same pixel size regardless of camera depth.
    sizeAttenuation: true
});

// We wrap the initial geometry in our Points container 
let currentPoints = new THREE.Points(geometries['sphere'], material);
scene.add(currentPoints);

// Add a very faint wireframe version of the mesh inside it so the user can easily
// grasp the relationship between the bare vertices and the solid faces they normally see!
const wireMat = new THREE.MeshBasicMaterial({ color: '#ffffff', wireframe: true, transparent: true, opacity: 0.03 });
let currentWire = new THREE.Mesh(geometries['sphere'], wireMat);
scene.add(currentWire);


// UI Control Wiring
const sizeSlider = document.getElementById('size');
const valSize = document.getElementById('val-size');

sizeSlider.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);
    material.size = v;
    valSize.textContent = v.toFixed(2);
});

const geoBtns = document.querySelectorAll('#geoGroup button');

geoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        geoBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const type = btn.dataset.geo;

        // Swap out the geometry on the fly!
        currentPoints.geometry = geometries[type];
        currentWire.geometry = geometries[type];
    });
});


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Pulse the size subtly for a bit of life
    material.size = parseFloat(sizeSlider.value) + Math.sin(elapsedTime * 3) * 0.01;

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();

// Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
