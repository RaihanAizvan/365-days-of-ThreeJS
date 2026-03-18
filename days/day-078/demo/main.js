import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 078: Light Color Demo (Additive Mixing)
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#020202');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 8, 8);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2 - 0.05;

// Shared Materials & Geometry
const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff, // Pure white floor needed to reflect all colors equally
    roughness: 0.1,
    metalness: 0.1
});

// A large stage to catch shadows and light
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    floorMaterial
);
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
scene.add(floor);

// Center Object (Will change color abruptly based on overlapping lights)
const centerObject = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.0 })
);
centerObject.position.y = 2;
centerObject.castShadow = true;
centerObject.receiveShadow = true;
scene.add(centerObject);

// The Core Feature: RGB Additive Mixing
const createSpotlight = (colorHex) => {
    const light = new THREE.SpotLight(colorHex, 150, 20, Math.PI / 6, 1.0, 1.5);
    light.castShadow = true;
    light.shadow.mapSize.set(1024, 1024);

    const target = new THREE.Object3D();
    scene.add(target);
    light.target = target;

    scene.add(light);

    // Add a small visual bulb 
    const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshBasicMaterial({ color: colorHex })
    );
    scene.add(bulb);

    return { light, target, bulb };
};

const spotR = createSpotlight(0xff0000); // Red
const spotG = createSpotlight(0x00ff00); // Green
const spotB = createSpotlight(0x0000ff); // Blue

// Ambient light set to absolute 0 to show pure additive math
scene.add(new THREE.AmbientLight(0x000000, 0));

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Rotate center object
    centerObject.rotation.y = elapsedTime * 0.5;
    centerObject.rotation.x = elapsedTime * 0.3;

    // Orbit the red light
    const angleR = elapsedTime * 0.8;
    spotR.light.position.set(Math.cos(angleR) * 4, 5, Math.sin(angleR) * 4);
    spotR.bulb.position.copy(spotR.light.position);
    spotR.target.position.set(Math.cos(angleR + Math.PI) * 0.5, 0, Math.sin(angleR + Math.PI) * 0.5); // Slight wobble on target

    // Orbit the green light
    const angleG = elapsedTime * 0.8 + (Math.PI * 2 / 3);
    spotG.light.position.set(Math.cos(angleG) * 4, 5, Math.sin(angleG) * 4);
    spotG.bulb.position.copy(spotG.light.position);
    spotG.target.position.set(Math.cos(angleG + Math.PI) * 0.5, 0, Math.sin(angleG + Math.PI) * 0.5);

    // Orbit the blue light
    const angleB = elapsedTime * 0.8 + (Math.PI * 4 / 3);
    spotB.light.position.set(Math.cos(angleB) * 4, 5, Math.sin(angleB) * 4);
    spotB.bulb.position.copy(spotB.light.position);
    spotB.target.position.set(Math.cos(angleB + Math.PI) * 0.5, 0, Math.sin(angleB + Math.PI) * 0.5);

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
