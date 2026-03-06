import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Day 65: GLTF Loading Basics Demo
 */

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(2, 2, 2);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

/**
 * Lights (GLTF models usually need light to see materials)
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

/**
 * Load GLTF
 */
const gltfLoader = new GLTFLoader();

// Note: Provide a path to a .gltf or .glb file below to test
// gltfLoader.load('/models/your-model.glb', (gltf) => {
//     scene.add(gltf.scene);
// }, 
// (progress) => console.log('loading...', progress),
// (error) => console.error('error loading gltf', error));

/**
 * Placeholder (while no model is loaded)
 */
const placeholder = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: '#ff0000' })
);
scene.add(placeholder);

/**
 * Animation
 */
const tick = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
