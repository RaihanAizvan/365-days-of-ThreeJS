import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 086: Probes & Spherical Harmonics Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0a0a0c');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// Probes work excellently with tone mapping!
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(2, 3, 5);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Materials
const material = new THREE.MeshStandardMaterial({
    color: '#ffffff', // Pure white receives light best for demo purposes
    roughness: 0.1, // Shiny to show directional reflections slightly
    metalness: 0.0
});

// Create a cluster of objects to demonstrate complex shading
const group = new THREE.Group();

const center = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2), material);
group.add(center);

for (let i = 0; i < 8; i++) {
    const angle = (Math.PI * 2 / 8) * i;
    const mini = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), material);
    mini.position.set(Math.cos(angle) * 2, 0, Math.sin(angle) * 2);
    group.add(mini);
}

scene.add(group);


// === LIGHT PROBE SETUP ===

// 1. Create the probe
const lightProbe = new THREE.LightProbe();
scene.add(lightProbe);

// 2. Initialize the math
const sh = new THREE.SphericalHarmonics3();

// Let's manually synthesize a complex lighting environment:
// Band 0: Base Overall Ambient (Dark red/magenta base)
sh.coefficients[0].set(0.5, 0.1, 0.3);

// Band 1: Y-Axis Directional (Simulating a sky/ground split. Blue from above, dark from below)
// The LightProbe algorithm takes these and perfectly interpolates them across the curve of the geometry!
sh.coefficients[1].set(0.1, 0.2, 0.8);
sh.coefficients[2].set(-0.2, -0.2, -0.2);
sh.coefficients[3].set(0.0, 0.8, 0.0); // Side lighting green

// Apply to probe
lightProbe.sh.copy(sh);
lightProbe.intensity = 1.0;


// UI Control Wiring
const intSlider = document.getElementById('intensity');
const shSlider = document.getElementById('sh-red');
const valInt = document.getElementById('val-intensity');
const valSh = document.getElementById('val-sh');

intSlider.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);
    lightProbe.intensity = v;
    valInt.textContent = v.toFixed(1);
});

shSlider.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);

    // We dynamically adjust the L0 coefficient for the Red channel!
    sh.coefficients[0].set(v, 0.1, 0.3);

    // Crucial: We must re-copy the SH data into the probe to trigger the WebGL uniform update!
    lightProbe.sh.copy(sh);

    valSh.textContent = v.toFixed(1);
});


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Rotate group to prove that the light is fixed in 3D space, not attached to the camera!
    group.rotation.x = Math.sin(elapsedTime * 0.3);
    group.rotation.y += 0.01;

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
