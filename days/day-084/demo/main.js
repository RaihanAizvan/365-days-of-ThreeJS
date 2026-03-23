import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 084: Frustum Management Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1a1a24');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setScissorTest(true); // Split screen active
document.body.appendChild(renderer.domElement);

// 1. The Target Camera (Subject to extreme frustum clipping)
const aspectHalf = (window.innerWidth / 2) / window.innerHeight;
const targetCamera = new THREE.PerspectiveCamera(45, aspectHalf, 0.1, 40);
targetCamera.position.set(0, 2, 20);

const helper = new THREE.CameraHelper(targetCamera);
scene.add(helper);

// 2. The Spectator Camera (To observe the frustum externally)
const spectatorCamera = new THREE.PerspectiveCamera(60, aspectHalf, 0.1, 100);
spectatorCamera.position.set(25, 20, 25);
spectatorCamera.lookAt(0, 0, 0);

// Controls attached to spectator
const controls = new OrbitControls(spectatorCamera, renderer.domElement);
controls.enableDamping = true;

// Build a long avenue of objects
const material = new THREE.MeshStandardMaterial({ color: '#e67e22', roughness: 0.2, metalness: 0.5 });
const boxes = [];
for (let i = 0; i < 30; i++) {
    // A long line of boxes stretching back into the distance
    const box = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material);
    box.position.set(0, 0, 15 - (i * 2));
    box.rotation.set(Math.random(), Math.random(), 0);
    scene.add(box);
    boxes.push(box);
}

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
dirLight.position.set(10, 10, 10);
scene.add(dirLight);


// UI Wiring
const nearSlider = document.getElementById('near');
const farSlider = document.getElementById('far');
const valNear = document.getElementById('val-near');
const valFar = document.getElementById('val-far');

nearSlider.addEventListener('input', (e) => {
    let v = parseFloat(e.target.value);

    // Prevent near from passing far
    if (v >= targetCamera.far) v = targetCamera.far - 0.1;
    e.target.value = v;

    targetCamera.near = v;
    targetCamera.updateProjectionMatrix();
    helper.update();
    valNear.textContent = v.toFixed(1);
});

farSlider.addEventListener('input', (e) => {
    let v = parseFloat(e.target.value);

    // Prevent far from passing near
    if (v <= targetCamera.near) v = targetCamera.near + 0.1;
    e.target.value = v;

    targetCamera.far = v;
    targetCamera.updateProjectionMatrix();
    helper.update();
    valFar.textContent = v.toFixed(1);
});


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Gently rotate all geometry
    for (const box of boxes) {
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
    }

    controls.update();

    // --- SPLIT SCREEN ROUTING ---
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cw = width / 2;

    // LEFT: Target View (Objects vanish violently due to clipping)
    helper.visible = false;
    renderer.setViewport(0, 0, cw, height);
    renderer.setScissor(0, 0, cw, height);
    renderer.render(scene, targetCamera);

    // RIGHT: Spectator View (Watch the near/far planes slide visually)
    helper.visible = true;
    renderer.setViewport(cw, 0, cw, height);
    renderer.setScissor(cw, 0, cw, height);
    renderer.render(scene, spectatorCamera);

    window.requestAnimationFrame(tick);
};

tick();

// Resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cw = width / 2;

    renderer.setSize(width, height);

    targetCamera.aspect = cw / height;
    targetCamera.updateProjectionMatrix();
    helper.update();

    spectatorCamera.aspect = cw / height;
    spectatorCamera.updateProjectionMatrix();
});
