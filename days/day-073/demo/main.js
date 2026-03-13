import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 073: Directional Vectors Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(5, 5, 8);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 1. Objects (Showcasing shadows)
const material = new THREE.MeshStandardMaterial({ color: '#222', roughness: 0.1 });

// High-rise "building"
const building = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), material);
building.position.y = 2;
building.castShadow = true;
scene.add(building);

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshStandardMaterial({ color: '#111', roughness: 0.8 })
);
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
scene.add(floor);

// 2. The "Sun" (Directional Light)
const sun = new THREE.DirectionalLight(0xff9800, 3);
sun.castShadow = true;

// Configure shadow area for parallel rays
sun.shadow.camera.left = -10;
sun.shadow.camera.right = 10;
sun.shadow.camera.top = 10;
sun.shadow.camera.bottom = -10;
sun.shadow.camera.near = 0.5;
sun.shadow.camera.far = 40;
sun.shadow.mapSize.width = 1024;
sun.shadow.mapSize.height = 1024;

scene.add(sun);

// Helper
const helper = new THREE.DirectionalLightHelper(sun, 1);
// scene.add(helper);

// Animation Loop
const clock = new THREE.Clock();
const timeDisplay = document.getElementById('time-display');

const tick = () => {
    const elapsedTime = clock.getElapsedTime() * 0.5;

    // Calculate "Sun" position (day cycle)
    const x = Math.cos(elapsedTime) * 15;
    const y = Math.sin(elapsedTime) * 15;

    sun.position.set(x, Math.max(0.1, y), 5); // Don't let sun go below ground for simplicity

    // UI Update (Very rough time simulation)
    const normalizedTime = (elapsedTime % (Math.PI * 2)) / (Math.PI * 2);
    const hours = Math.floor(normalizedTime * 24);
    timeDisplay.innerText = `time: ${hours % 12 || 12}:00 ${hours >= 12 ? 'PM' : 'AM'}`;

    // Update helper if visible
    // helper.update();

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
