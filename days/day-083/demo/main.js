import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 083: Camera Helpers & Split Screen Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#111111');
scene.fog = new THREE.Fog('#111', 10, 50);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// To perform split screen, we MUST enable scissor tests!
renderer.setScissorTest(true);
document.body.appendChild(renderer.domElement);

// We need two complete camera setups

// 1. The Target Camera (The one we will manipulate and observe)
const aspectHalf = (window.innerWidth / 2) / window.innerHeight;
const targetCamera = new THREE.PerspectiveCamera(50, aspectHalf, 0.5, 15);
targetCamera.position.set(0, 3, 5);
targetCamera.lookAt(0, 0, 0);

// Add the visual Helper
const cameraHelper = new THREE.CameraHelper(targetCamera);
scene.add(cameraHelper);

// 2. The Spectator Camera (Orbital outside observer)
const spectatorCamera = new THREE.PerspectiveCamera(60, aspectHalf, 0.1, 100);
spectatorCamera.position.set(-10, 8, 10);
spectatorCamera.lookAt(0, 0, 0);

// Controls (Attached to Spectator only!)
const controls = new OrbitControls(spectatorCamera, renderer.domElement);
controls.enableDamping = true;

// Build a small environment to look at
const material = new THREE.MeshStandardMaterial({ color: '#4facfe', roughness: 0.3, metalness: 0.2 });
const groundMat = new THREE.MeshStandardMaterial({ color: '#222222', roughness: 0.9, metalness: 0 });

const floor = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), groundMat);
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

// Generate a grid of pillars
for (let x = -10; x <= 10; x += 2) {
    for (let z = -10; z <= 10; z += 2) {
        if (Math.abs(x) < 0.1 && Math.abs(z) < 0.1) continue; // Skip absolute center 
        const h = 0.5 + Math.random() * 2;
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.5, h, 0.5), material);
        pillar.position.set(x, h / 2, z);
        scene.add(pillar);
    }
}

// Center focal object
const focalObj = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshStandardMaterial({ color: 0xff0044, wireframe: true }));
focalObj.position.y = 1;
scene.add(focalObj);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const dLight = new THREE.DirectionalLight(0xffffff, 1.5);
dLight.position.set(5, 10, 5);
scene.add(dLight);


// Interactive UI Wiring
const fovSlider = document.getElementById('fov');
const farSlider = document.getElementById('far');
const valFov = document.getElementById('val-fov');
const valFar = document.getElementById('val-far');

fovSlider.addEventListener('input', (e) => {
    const v = parseInt(e.target.value);
    targetCamera.fov = v;
    targetCamera.updateProjectionMatrix(); // mandatory
    cameraHelper.update();                 // mandatory
    valFov.textContent = v + '°';
});

farSlider.addEventListener('input', (e) => {
    const v = parseInt(e.target.value);
    targetCamera.far = v;
    targetCamera.updateProjectionMatrix(); // mandatory
    cameraHelper.update();                 // mandatory
    valFar.textContent = v;
});


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Gently pan the target camera left and right
    targetCamera.position.x = Math.sin(elapsedTime * 0.5) * 3;
    targetCamera.lookAt(focalObj.position);
    targetCamera.updateProjectionMatrix(); // Update because position/lookAt changes the matrix slightly in context of the helper
    cameraHelper.update();

    controls.update();

    // --- SPLIT SCREEN RENDERING ---

    const width = window.innerWidth;
    const height = window.innerHeight;

    // LEFT SCREEN (Target Camera Output)
    // hide the helper from the target camera! (it looks weird to see your own helper inside your eye)
    cameraHelper.visible = false;

    renderer.setViewport(0, 0, width / 2, height);
    renderer.setScissor(0, 0, width / 2, height);
    renderer.render(scene, targetCamera);

    // RIGHT SCREEN (Spectator View)
    // show the helper
    cameraHelper.visible = true;

    renderer.setViewport(width / 2, 0, width / 2, height);
    renderer.setScissor(width / 2, 0, width / 2, height);
    renderer.render(scene, spectatorCamera);

    window.requestAnimationFrame(tick);
};

tick();

// Resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const halfWidth = width / 2;

    renderer.setSize(width, height);

    // Update both cameras
    targetCamera.aspect = halfWidth / height;
    targetCamera.updateProjectionMatrix();
    cameraHelper.update();

    spectatorCamera.aspect = halfWidth / height;
    spectatorCamera.updateProjectionMatrix();
});
