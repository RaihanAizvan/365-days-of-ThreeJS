import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 085: Baking Foundations Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0a0a0a');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// Notice shadowMap is NOT enabled. We aren't calculating ANY shadows!
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(3, 4, 5);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.5;

// === We will synthetically generate a "Baked Lightmap" using HTML Canvas ===
// Normally this is a JPG exported from Blender!
const generateMockLightmap = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Fill with a dark ambient base
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, 512, 512);

    // Create a fake cast shadow and a bright "highlight" spot
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, '#ffffff'); // bright center
    gradient.addColorStop(0.4, '#444444');
    gradient.addColorStop(1, '#050505');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    // Draw a sharp stark shadow across it
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(200, 512);
    ctx.lineTo(0, 512);
    ctx.lineTo(0, 0);
    ctx.fillStyle = '#000000'; // Pure dark shadow
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
};

const fakeBakedTex = generateMockLightmap();

// Material relying entirely on the baked lightmap
const material = new THREE.MeshStandardMaterial({
    color: '#3498db', // The "base color" of the object
    roughness: 0.8,
    metalness: 0.1,
    lightMap: fakeBakedTex,
    lightMapIntensity: 1.0
});

// A standard box
const geometry = new THREE.BoxGeometry(2, 2, 2);

// CRITICAL STEP: The lightMap requires the 'uv2' attribute to exist!
// For this procedural box, we just clone the 'uv' coordinates perfectly.
// For complex imported models, Blender exports custom uv2 mapping.
geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// EXPLICIT CHECK: There are absolutely no lights added to the scene. 

// UI Wiring
const intSlider = document.getElementById('intensity');
const valInt = document.getElementById('val-intensity');

intSlider.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);
    material.lightMapIntensity = v;
    valInt.textContent = v.toFixed(1);
});


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
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
