import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Day 066: GLTF Animations Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#222');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(4, 4, 4);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

// GLTF Loader & Animation Mixer
const gltfLoader = new GLTFLoader();
let mixer = null;

// Note: To see animations, you'd load a model with animations here
// For now, we'll create a simple animated placeholder to demonstrate the mixer logic if no model is found
// gltfLoader.load('/models/Fox.glb', (gltf) => {
//     mixer = new THREE.AnimationMixer(gltf.scene);
//     const action = mixer.clipAction(gltf.animations[0]);
//     action.play();
//     scene.add(gltf.scene);
// });

// Placeholder: Animated Cube (Simulating mixer behavior)
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshStandardMaterial({ color: '#44aa88' })
);
mesh.castShadow = true;
scene.add(mesh);

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({ color: '#333' })
);
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
scene.add(floor);

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = clock.getDelta();

    // Update mixer
    if (mixer) {
        mixer.update(deltaTime);
    } else {
        // Simple procedural animation if no mixer
        mesh.rotation.y = elapsedTime * 0.5;
        mesh.position.y = Math.sin(elapsedTime * 2) * 0.5 + 1.2;
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
