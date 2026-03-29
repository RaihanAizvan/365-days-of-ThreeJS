import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 089: Sprites and Canvas Maps Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#2c3e50');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(2, 4, 8);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// Orbit slowly to demonstrate that the sprite turns its face to you
controls.autoRotate = true;
controls.autoRotateSpeed = 2.0;

// Grid to define ground
const grid = new THREE.GridHelper(20, 20);
scene.add(grid);

// Anchor Box (The solid 3D geometry acting as our subject)
const materialBox = new THREE.MeshStandardMaterial({ color: '#f39c12', roughness: 0.4, metalness: 0.1 });
const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), materialBox);
box.position.y = 0.5;
scene.add(box);

// === SPRITE UI GENERATION ===

// 1. Build a hidden HTML Canvas
const generateTextCanvas = (text) => {
    const canvas = document.createElement('canvas');
    // Canvas resolution acts as the "crispness" of the texture map.
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Make the background transparent (or semi-transparent dark box for UI overlay)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.roundRect(0, 0, 512, 128, 20);
    ctx.fill();

    // Draw crisply styled text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${text}`, 256, 64); // Center of 512x128

    return new THREE.CanvasTexture(canvas);
};

// 2. Map the Canvas Texture to a SpriteMaterial
let currentAlt = 0;
const spriteMaterial = new THREE.SpriteMaterial({
    map: generateTextCanvas(`ALTITUDE: [0.0M]`),
    transparent: true
});

// 3. Spawn the Sprite
const labelSprite = new THREE.Sprite(spriteMaterial);
// The scale aligns roughly to the canvas aspect ratio (512x128 -> 4:1)
labelSprite.scale.set(4, 1, 1);
// Prop it exactly 2 units above the box's position
labelSprite.position.y = box.position.y + 1.5;

scene.add(labelSprite);


// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);


// UI Control Wiring
const altSlider = document.getElementById('alt');
const valAlt = document.getElementById('val-alt');

altSlider.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);

    // Move the physical box
    box.position.y = 0.5 + v;

    // Have the sprite track it seamlessly floating above
    labelSprite.position.y = box.position.y + 1.5;

    // DYNAMIC RE-DRAW: By generating a new canvas based on the value, we get a live-updating floating 3D dashboard!
    // Memory Note: Generating canvases aggressively like this in a real game should be pooled, 
    // but the TextureLoader automatically handles the garbage collection of standard swapped textures fairly well.
    const oldMap = spriteMaterial.map;
    spriteMaterial.map = generateTextCanvas(`ALTITUDE: [${v > 0 ? '+' : ''}${v.toFixed(1)}M]`);
    if (oldMap) oldMap.dispose(); // Always manually dispose unused textures to save memory!

    valAlt.textContent = v.toFixed(1);
});


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    controls.update();

    // Minor bobbing to make it feel alive
    const elapsedTime = clock.getElapsedTime();
    const bob = Math.sin(elapsedTime * 2) * 0.1;

    // Sprite tracks box's Y + floating offset
    labelSprite.position.y = box.position.y + 1.5 + bob;

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
