import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 079: Shadow Theory Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#eeece5'); // clean studio backdrop

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 1. THE MOST IMPORTANT STEP: Enable shadow maps on the renderer!
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(5, 5, 8);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Shared Material
const materialObj = new THREE.MeshStandardMaterial({
    color: '#ff4b4b', // soft red
    roughness: 0.3,
    metalness: 0.1
});

const materialFloor = new THREE.MeshStandardMaterial({
    color: '#fdfbf7', // off-white
    roughness: 0.8,
    metalness: 0.0
});

// A group of objects that act as shadow casters
const casters = [];

// Center Box
const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), materialObj);
box.position.set(0, 2, 0);
// 2. Tell the specific mesh to throw a shadow
box.castShadow = true;
scene.add(box);
casters.push(box);

// Orbiting Spheres
for (let i = 0; i < 3; i++) {
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 32), materialObj);
    sphere.position.y = 2;
    // 3. Spheres must also cast shadows
    // Notice how they also receive shadows if they eclipse each other!
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    scene.add(sphere);
    casters.push(sphere);
}

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(25, 25),
    materialFloor
);
floor.rotation.x = -Math.PI * 0.5;
// 4. Tell the floor to catch incoming shadows
floor.receiveShadow = true;
scene.add(floor);


// Soft Ambient Light (to prevent pitch black shadows)
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

// Primary Key Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
directionalLight.position.set(4, 6, 2);

// 5. Tell the light to originate the shadow rays
directionalLight.castShadow = true;

// Expand shadow frustum for DirectionalLight (Default is very small)
directionalLight.shadow.camera.left = -5;
directionalLight.shadow.camera.right = 5;
directionalLight.shadow.camera.top = 5;
directionalLight.shadow.camera.bottom = -5;

scene.add(directionalLight);

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Rotate main box
    casters[0].rotation.x = elapsedTime * 0.5;
    casters[0].rotation.y = Math.sin(elapsedTime * 0.3);

    // Orbit the spheres
    for (let i = 1; i <= 3; i++) {
        const offset = (Math.PI * 2 / 3) * i;
        casters[i].position.x = Math.sin(elapsedTime + offset) * 3.5;
        casters[i].position.z = Math.cos(elapsedTime + offset) * 3.5;
        casters[i].position.y = 2 + Math.sin(elapsedTime * 2 + offset);
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
