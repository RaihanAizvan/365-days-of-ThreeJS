import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 071: Lighting Fundamentals Demo
 */

// Scene
const scene = new THREE.Scene();

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(2, 2, 4);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Materials
const material = new THREE.MeshStandardMaterial({
    color: '#333',
    roughness: 0.2,
    metalness: 0.1
});

// Geometry
const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), material);
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
scene.add(floor);

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
sphere.position.y = 0.5;
sphere.castShadow = true;
scene.add(sphere);

// Lights
// 1. Ambient Light (very low)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
scene.add(ambientLight);

// 2. Point Light (The focus of today)
const pointLight = new THREE.PointLight(0xffca28, 20, 0, 2); // Intensity 20, Decay 2
pointLight.position.set(1, 1, 1);
pointLight.castShadow = true;
scene.add(pointLight);

// Visual Helper for Light repositioning
const lightHelper = new THREE.PointLightHelper(pointLight, 0.1);
scene.add(lightHelper);

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Move light in a circle
    pointLight.position.x = Math.sin(elapsedTime) * 2;
    pointLight.position.z = Math.cos(elapsedTime) * 2;
    pointLight.position.y = 1 + Math.sin(elapsedtime * 0.5) * 0.5;

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
