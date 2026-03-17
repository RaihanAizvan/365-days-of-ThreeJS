import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 077: Light Decay Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000');
scene.fog = new THREE.FogExp2('#000', 0.02);

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
camera.position.set(0, 8, 15);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2 - 0.05;

// Shared Materials & Geometry for the environment
const material = new THREE.MeshStandardMaterial({
    color: '#888',
    roughness: 0.4,
    metalness: 0.1
});

// A long corridor to visualize depth
const corridor = new THREE.Mesh(
    new THREE.BoxGeometry(30, 0.5, 40),
    material
);
corridor.position.y = -0.25;
corridor.receiveShadow = true;
scene.add(corridor);

// Some pillars along the corridor
for (let i = 0; i < 8; i++) {
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), material);
    p1.position.set(-6, 2, -15 + i * 5);
    p1.castShadow = true;
    p1.receiveShadow = true;

    const p2 = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), material);
    p2.position.set(6, 2, -15 + i * 5);
    p2.castShadow = true;
    p2.receiveShadow = true;

    scene.add(p1, p2);
}

// 1. Point Light A (Linear Decay: 1)
const colorA = 0xff3366; // Red/Pink
// Notice the very low candela value compared to the physical light.
// With decay = 1, it doesn't need much push to go far.
// It will drop steadily to absolute 0 at distance 25.
const lightA = new THREE.PointLight(colorA, 10, 25, 1);
lightA.position.set(-3, 2, 8);
lightA.castShadow = true;
scene.add(lightA);

const sphereA = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.MeshBasicMaterial({ color: colorA })
);
scene.add(sphereA);


// 2. Point Light B (Physical Inverse-Square Decay: 2)
const colorB = 0x00f2fe; // Cyan
// Because it drops off by distance squared, we need a massive initial intensity to push it out.
// Even with high intensity, it will never reach pure 0, just get infinitely dim. distance is 0.
const lightB = new THREE.PointLight(colorB, 250, 0, 2);
lightB.position.set(3, 2, 8);
lightB.castShadow = true;
scene.add(lightB);

const sphereB = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.MeshBasicMaterial({ color: colorB })
);
scene.add(sphereB);

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Move lights down the corridor
    const zPos = 8 - (elapsedTime % 15) * 2;

    lightA.position.z = zPos;
    sphereA.position.copy(lightA.position);

    lightB.position.z = zPos;
    sphereB.position.copy(lightB.position);

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
