import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 081: Shadow Biasing Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#e0e0e0');
// Adding gentle fog to give depth
scene.fog = new THREE.Fog('#e0e0e0', 10, 30);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Crucial: Enabling shadows but forcing a highly susceptible state.
// PCFSoftShadowMap blurs shadows, which can mask acne. 
// We use PCFShadowMap (Basic) to make the mathematical acne VERY obvious for educational purposes.
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 8, 12);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Materials
const material = new THREE.MeshStandardMaterial({
    color: '#ffffff', // Clean white highlights the acne easily
    roughness: 0.3,
    metalness: 0.0
});

// Floor
const floor = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), material);
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
scene.add(floor);

// Geometry heavily susceptible to acne (curved surfaces)
const spheres = [];
for (let i = 0; i < 3; i++) {
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 64, 64),
        material
    );
    sphere.position.set((i - 1) * 4, 1.5, 0);
    sphere.castShadow = true;
    sphere.receiveShadow = true; // Essential for seeing self-shadow acne!
    scene.add(sphere);
    spheres.push(sphere);
}

// 1. Ambient Fill
scene.add(new THREE.AmbientLight(0xffffff, 0.3));

// 2. The Key Light
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 5, 5);
dirLight.castShadow = true;

// Deliberately setting a small shadow map to exacerbate the floating-point precision errors 
// so the user can see the acne extremely clearly by default.
dirLight.shadow.mapSize.set(512, 512);
dirLight.shadow.camera.near = 1;
dirLight.shadow.camera.far = 20;

// The default values are 0 (which causes the hideous striping on the spheres right now)
dirLight.shadow.bias = 0;
dirLight.shadow.normalBias = 0;

scene.add(dirLight);

// Interactive UI Wiring
const biasSlider = document.getElementById('bias');
const nbiasSlider = document.getElementById('nbias');
const valBias = document.getElementById('val-bias');
const valNBias = document.getElementById('val-nbias');

biasSlider.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);
    dirLight.shadow.bias = v;
    valBias.textContent = v.toFixed(4);
});

nbiasSlider.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);
    dirLight.shadow.normalBias = v;
    valNBias.textContent = v.toFixed(4);
});


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Slowly move the light to show how dynamic shadows flicker when acne is present
    dirLight.position.x = Math.sin(elapsedTime * 0.2) * 5;
    dirLight.position.z = Math.max(1, Math.cos(elapsedTime * 0.2) * 5);

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
