import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 074: Point Falloff Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000');
scene.fog = new THREE.FogExp2(0x000000, 0.05);

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
camera.position.set(0, 4, 12);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2 - 0.05;

// Objects
const material = new THREE.MeshStandardMaterial({
    color: '#888',
    roughness: 0.1,
    metalness: 0.3
});

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 50),
    new THREE.MeshStandardMaterial({ color: '#111', roughness: 0.8 })
);
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
scene.add(floor);

// Floating cubes grid
const cubes = [];
const boxGeom = new THREE.BoxGeometry(0.8, 0.8, 0.8);
const gridSize = 5;
const spacing = 2;

for (let x = -gridSize; x <= gridSize; x++) {
    for (let z = -gridSize; z <= gridSize; z++) {
        const cube = new THREE.Mesh(boxGeom, material);
        cube.position.set(x * spacing, 1 + Math.random() * 2, z * spacing);

        // Random starting rotation
        cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

        cube.castShadow = true;
        cube.receiveShadow = true;
        scene.add(cube);
        cubes.push(cube);
    }
}

// 1. Ambient Light (very subtle to preserve contrast)
scene.add(new THREE.AmbientLight(0xffffff, 0.02));

// 2. The Point Light
const lightColor = 0xff5722; // vibrant orange
const lightIntensity = 100; // needs to be high because of decay=2
const lightDistance = 0; // infinite
const lightDecay = 2; // physical truth

const pointLight = new THREE.PointLight(lightColor, lightIntensity, lightDistance, lightDecay);
pointLight.castShadow = true;
pointLight.shadow.bias = -0.001; // fix self-shadowing acne
pointLight.shadow.mapSize.set(1024, 1024);

scene.add(pointLight);

// Light representation
const pointLightMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 16, 16),
    new THREE.MeshBasicMaterial({ color: lightColor })
);
scene.add(pointLightMesh);

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Animate point light in a large figure-8
    const r = 6;
    pointLight.position.x = Math.sin(elapsedTime * 0.5) * r;
    pointLight.position.z = Math.sin(elapsedTime * 1) * (r * 0.5);
    pointLight.position.y = 2 + Math.cos(elapsedTime * 0.3) * 1.5;

    // Sync mesh
    pointLightMesh.position.copy(pointLight.position);

    // Gently rotate cubes
    for (const cube of cubes) {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.01;
    }

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
