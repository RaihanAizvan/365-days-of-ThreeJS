import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 088: Procedural Points Geometry Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#030305');
scene.fog = new THREE.Fog('#030305', 5, 40);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(2, 4, 15);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

// === GENERATORS ===
// We define functions that fill a Float32Array with specific math.
const PARTICLE_COUNT = 30000;
const material = new THREE.PointsMaterial({
    size: 0.05,
    sizeAttenuation: true,
    color: '#a29bfe'
});

// A master points object holding an initially empty generic geometry
const geometry = new THREE.BufferGeometry();
const pointsSys = new THREE.Points(geometry, material);
scene.add(pointsSys);

const generateShape = (mode) => {
    // 1. Allocate Memory Array
    const positions = new Float32Array(PARTICLE_COUNT * 3);

    // 2. Loop and fill depending on the requested mathematics
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const stride = i * 3;

        if (mode === 'cube') {
            // Random scatter everywhere inside a 10x10x10 cube
            positions[stride + 0] = (Math.random() - 0.5) * 15;
            positions[stride + 1] = (Math.random() - 0.5) * 15;
            positions[stride + 2] = (Math.random() - 0.5) * 15;

        } else if (mode === 'sphere') {
            // Polar math to snap points to the shell of a sphere (Radius 6)
            const r = 6;
            const theta = Math.random() * Math.PI * 2; // angle around Y (azimuth)
            const phi = Math.acos(Math.random() * 2 - 1); // angle off Y (elevation)

            positions[stride + 0] = r * Math.sin(phi) * Math.cos(theta); // X
            positions[stride + 1] = r * Math.cos(phi);                   // Y
            positions[stride + 2] = r * Math.sin(phi) * Math.sin(theta); // Z

            // Add slight random jitter thickness to the shell
            positions[stride + 0] += (Math.random() - 0.5) * 0.5;
            positions[stride + 1] += (Math.random() - 0.5) * 0.5;
            positions[stride + 2] += (Math.random() - 0.5) * 0.5;

        } else if (mode === 'galaxy') {
            // Spiral arms! Extremely basic implementation.
            const branches = 4;
            const r = Math.random() * 8; // Distance from center
            const spinAngle = r * 0.5; // Outer particles trail behind
            const baseAngle = ((i % branches) / branches) * Math.PI * 2; // 4 branches separated equally

            // Random scattering (tighter near center, looser at edges!)
            const scatterX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 1.5;
            const scatterY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 1.5;
            const scatterZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 1.5;

            positions[stride + 0] = Math.cos(baseAngle + spinAngle) * r + scatterX;
            positions[stride + 1] = scatterY * (1 - r / 10); // much flatter far out
            positions[stride + 2] = Math.sin(baseAngle + spinAngle) * r + scatterZ;
        }
    }

    // 3. Mount it onto the buffer!
    // Since we re-use the same geometry, we must inform three.js that the array was blown away
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.attributes.position.needsUpdate = true;
};

// Spawn the default on load
generateShape('cube');


// UI Control Wiring
const btns = document.querySelectorAll('#shapeGroup button');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        generateShape(btn.dataset.shape);
    });
});


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    // Let the cluster gently float/rotate as a group
    pointsSys.rotation.y = clock.getElapsedTime() * 0.1;

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
