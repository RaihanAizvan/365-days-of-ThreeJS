import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 076: Hemisphere Gradients Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#050510');
scene.fog = new THREE.FogExp2('#050510', 0.05);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(3, 4, 8);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

// Materials
// Softness of the gradient is very dependent on roughness!
const material = new THREE.MeshStandardMaterial({
    color: '#fff',
    roughness: 0.7,
    metalness: 0.1
});

// Objects (Monoliths)
const geometry = new THREE.BoxGeometry(1, 4, 1);
const count = 20;

for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(geometry, material);

    const radius = 5 + Math.random() * 4;
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;

    mesh.position.x = Math.cos(angle) * radius;
    mesh.position.z = Math.sin(angle) * radius;
    mesh.position.y = (Math.random() - 0.5) * 2;

    mesh.rotation.y = angle;
    mesh.rotation.x = (Math.random() - 0.5) * 0.5;

    scene.add(mesh);
}

// 1. Hemisphere Light (The ONLY light in the scene)
const skyColor = 0xff00ff;    // Neon pink
const groundColor = 0x00ffff; // Neon cyan
const hemiIntensity = 2.0;

const hemisphereLight = new THREE.HemisphereLight(skyColor, groundColor, hemiIntensity);
scene.add(hemisphereLight);

/**
 * Visualizing the "Up" vector 
 * We will draw a line showing the direction the hemisphere light considers "Up" (sky color).
 */
const points = [];
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(0, 3, 0));
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const upLine = new THREE.Line(lineGeometry, lineMaterial);
scene.add(upLine);

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Rotate the Hemisphere Light's Position (Axis of the gradient)
    // Remember: HemisphereLight position doesn't behave like PointLight position. 
    // It's a directional vector from origin (0,0,0) defining what is "up".
    const x = Math.sin(elapsedTime * 0.5) * 3;
    const y = Math.max(0.2, Math.cos(elapsedTime * 0.5) * 3); // Keep it mostly pointing up, but wobble
    const z = Math.sin(elapsedTime * 0.2) * 2;

    hemisphereLight.position.set(x, y, z).normalize();

    // Update the visual helper line to match
    const positions = upLine.geometry.attributes.position.array;
    positions[3] = hemisphereLight.position.x * 3;
    positions[4] = hemisphereLight.position.y * 3;
    positions[5] = hemisphereLight.position.z * 3;
    upLine.geometry.attributes.position.needsUpdate = true;

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
