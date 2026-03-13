import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 072: Ambient & Hemisphere Lights Demo
 */

// Scene
const scene = new THREE.Scene();

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(4, 3, 5);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 1. Hemisphere Light (Artistic fill)
const skyColor = 0xb1e1ff;    // light blue
const groundColor = 0xb97a20; // brownish
const hemiIntensity = 0.8;
const hemisphereLight = new THREE.HemisphereLight(skyColor, groundColor, hemiIntensity);
scene.add(hemisphereLight);

// 2. Directional Light (Key highlight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 3. Objects to showcase shading
const material = new THREE.MeshStandardMaterial({
    color: '#222',
    roughness: 0.1,
    metalness: 0
});

const sphereGeom = new THREE.SphereGeometry(1, 64, 64);

for (let i = 0; i < 3; i++) {
    const sphere = new THREE.Mesh(sphereGeom, material);
    sphere.position.x = (i - 1) * 3;
    scene.add(sphere);
}

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ color: '#111', roughness: 0.8 })
);
floor.rotation.x = -Math.PI * 0.5;
floor.position.y = -1;
scene.add(floor);

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Toggle intensity slightly to visualize the contribution
    const currentHemi = hemiIntensity + Math.sin(elapsedTime) * 0.2;
    hemisphereLight.intensity = currentHemi;

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
