import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 080: Shadow Mapping Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#222222');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true; // Essential
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 8, 15);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Materials
const material = new THREE.MeshStandardMaterial({
    color: '#3498db',
    roughness: 0.4,
    metalness: 0.1
});

const groundMaterial = new THREE.MeshStandardMaterial({
    color: '#95a5a6',
    roughness: 0.8
});

// Floor
const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), groundMaterial);
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
scene.add(floor);

// Center Podium
const podium = new THREE.Mesh(new THREE.BoxGeometry(2, 1, 2), material);
podium.position.y = 0.5;
podium.castShadow = true;
podium.receiveShadow = true;
scene.add(podium);

// Orbiting Spheres (Will drift in and out of the shadow frustum)
const spheres = [];
for (let i = 0; i < 4; i++) {
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
    sphere.position.y = 1.5;
    sphere.castShadow = true;
    scene.add(sphere);
    spheres.push(sphere);
}

// 1. Ambient Fill
scene.add(new THREE.AmbientLight(0xffffff, 0.2));

// 2. The Directional Light
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 6, 4);
dirLight.castShadow = true;

// The critical part: Sizing the shadow frustum tightly around the podium.
// Notice it is small (4x4 box)
dirLight.shadow.camera.left = -4;
dirLight.shadow.camera.right = 4;
dirLight.shadow.camera.top = 4;
dirLight.shadow.camera.bottom = -4;
dirLight.shadow.camera.near = 1;
dirLight.shadow.camera.far = 15;

// Small map size to visually demonstrate resolution limits (optional, but 1024 is better)
dirLight.shadow.mapSize.set(1024, 1024);

scene.add(dirLight);

// 3. THE HELPER
// This is the crux of today's lesson. It visually renders the otherwise invisible shadow camera.
const cameraHelper = new THREE.CameraHelper(dirLight.shadow.camera);
scene.add(cameraHelper);

// Optional: Light direction helper
const dirHelper = new THREE.DirectionalLightHelper(dirLight, 1);
scene.add(dirHelper);


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Orbit the spheres in a very wide circle so they leave the shadow frustum
    for (let i = 0; i < 4; i++) {
        const angle = elapsedTime * 0.8 + (i * Math.PI / 2);
        // Radius is 6, but the shadow camera is only 4 from center.
        // Thus, they will only cast shadows when they pass near the center!
        spheres[i].position.x = Math.cos(angle) * 6;
        spheres[i].position.z = Math.sin(angle) * 6;
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
