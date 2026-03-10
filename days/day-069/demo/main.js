import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 069: Raycasting & Interactivity Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#050505');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 8);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x4facfe, 10, 20);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

// 1. Interactive Objects
const objects = [];
const geometry = new THREE.IcosahedronGeometry(1, 0);

for (let i = 0; i < 3; i++) {
    const material = new THREE.MeshStandardMaterial({
        color: '#222',
        metalness: 0.9,
        roughness: 0.1,
        emissive: '#00f2fe',
        emissiveIntensity: 0
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (i - 1) * 3;
    scene.add(mesh);
    objects.push(mesh);
}

// 2. Raycaster Setup
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// 3. Animation Loop
const clock = new THREE.Clock();
let currentIntersect = null;

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = clock.getDelta();

    // Animate objects
    objects.forEach((obj, idx) => {
        obj.position.y = Math.sin(elapsedTime + idx) * 0.5;
        obj.rotation.y = elapsedTime * 0.5;
        obj.rotation.x = elapsedTime * 0.2;

        // Reset emissive if not hovered
        if (obj !== currentIntersect) {
            obj.material.emissiveIntensity = THREE.MathUtils.lerp(obj.material.emissiveIntensity, 0, 0.1);
        }
    });

    // Raycasting
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objects);

    if (intersects.length > 0) {
        if (!currentIntersect) {
            // Mouse enter
            // console.log('mouse enter');
        }
        currentIntersect = intersects[0].object;
        currentIntersect.material.emissiveIntensity = 2.0;
    } else {
        if (currentIntersect) {
            // Mouse leave
            // console.log('mouse leave');
        }
        currentIntersect = null;
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
