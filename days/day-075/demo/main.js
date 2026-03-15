import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 075: Spot Cone Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000');
scene.fog = new THREE.FogExp2('#000', 0.03);

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
camera.position.set(0, 6, 12);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2 - 0.05;

// Materials
const material = new THREE.MeshStandardMaterial({
    color: '#333',
    roughness: 0.2,
    metalness: 0.1
});

// Floor (The "Stage")
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshStandardMaterial({ color: '#111', roughness: 0.9 })
);
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
scene.add(floor);

// Pedestals & Artifacts
const columns = [];
for (let i = 0; i < 3; i++) {
    const group = new THREE.Group();

    // Base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1, 2, 32), material);
    base.position.y = 1;
    base.castShadow = true;
    base.receiveShadow = true;
    group.add(base);

    // Jewel (Torus)
    const jewel = new THREE.Mesh(
        new THREE.TorusGeometry(0.4, 0.15, 16, 64),
        new THREE.MeshStandardMaterial({ color: '#fff', metalness: 0.8, roughness: 0.2 })
    );
    jewel.position.y = 2.8;
    jewel.castShadow = true;
    group.add(jewel);

    group.position.x = (i - 1) * 4;
    scene.add(group);
    columns.push({ group, jewel });
}

// 1. Ambient Light
scene.add(new THREE.AmbientLight(0xffffff, 0.02)); // Very dark

// 2. The Spotlights
const createSpotlight = (color) => {
    const spotLight = new THREE.SpotLight(
        color,
        80, // Candela
        0,  // Distance (infinite)
        Math.PI / 6, // Angle (30 deg)
        0.5, // Penumbra (softness)
        2 // Decay
    );

    spotLight.castShadow = true;
    spotLight.shadow.mapSize.set(1024, 1024);
    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 20;

    // Create a target for it
    const target = new THREE.Object3D();
    scene.add(target);
    spotLight.target = target;

    scene.add(spotLight);

    return { light: spotLight, target: target };
};

const spot1 = createSpotlight(0xffeb3b); // Yellow
spot1.light.position.set(-6, 8, 4);

const spot2 = createSpotlight(0x00f2fe); // Cyan
spot2.light.position.set(6, 8, 4);

const spot3 = createSpotlight(0xff007f); // Magenta
spot3.light.position.set(0, 10, -6);


// Helpers
// scene.add(new THREE.SpotLightHelper(spot1.light, '#fff'));
// scene.add(new THREE.SpotLightHelper(spot2.light, '#fff'));
// scene.add(new THREE.SpotLightHelper(spot3.light, '#fff'));

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Rotate Jewels
    for (const col of columns) {
        col.jewel.rotation.x = elapsedTime * 0.5;
        col.jewel.rotation.y = elapsedTime * 0.5;
        col.jewel.position.y = 2.8 + Math.sin(elapsedTime * 2 + col.group.position.x) * 0.2;
    }

    // Move Spotlight Targets (Panning across the stage)
    spot1.target.position.x = Math.sin(elapsedTime * 0.8) * 8;
    spot1.target.position.z = Math.cos(elapsedTime * 0.8) * 2;

    spot2.target.position.x = Math.cos(elapsedTime * 1.2) * 8;
    spot2.target.position.z = Math.sin(elapsedTime * 1.2) * 2;

    spot3.target.position.x = Math.sin(elapsedTime * 0.5) * 4;
    spot3.target.position.z = Math.sin(elapsedTime * 0.2) * 4;

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
