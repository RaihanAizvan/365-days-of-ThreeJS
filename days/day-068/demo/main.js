import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 068: Animation Blending & Crossfading Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0b0b0b');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(4, 3, 6);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
const ambientLight = new THREE.AmbientLight(0x4facfe, 0.2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 1. Procedural Rigged Object (Tentacle/Snake-like)
const boneCount = 8;
const segmentHeight = 1;
const height = boneCount * segmentHeight;

const geometry = new THREE.CylinderGeometry(0.3, 0.6, height, 16, boneCount * 4, true);
const position = geometry.attributes.position;
const skinIndices = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
    const y = position.getY(i) + height / 2;
    const skinIndex = Math.min(Math.floor(y / segmentHeight), boneCount - 1);
    const skinWeight = (y % segmentHeight) / segmentHeight;

    skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
}

geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

const material = new THREE.MeshStandardMaterial({
    color: '#4facfe',
    wireframe: true,
    emissive: '#4facfe',
    emissiveIntensity: 0.2,
    metalness: 0.8,
    roughness: 0.1,
    side: THREE.DoubleSide
});

const mesh = new THREE.SkinnedMesh(geometry, material);

// 2. Create Skeleton
const bones = [];
for (let i = 0; i < boneCount; i++) {
    const bone = new THREE.Bone();
    bones.push(bone);
    if (i > 0) bones[i - 1].add(bone);
    bone.position.y = i === 0 ? -height / 2 : segmentHeight;
}

mesh.add(bones[0]);
const skeleton = new THREE.Skeleton(bones);
mesh.bind(skeleton);
scene.add(mesh);

// 3. Animation Mixers & clips
const mixer = new THREE.AnimationMixer(mesh);

// State 1: "Idle" (Gentle Sway)
const idleTimes = [0, 1, 2];
const idleTracks = [];
for (let i = 1; i < boneCount; i++) {
    const values = [0, 0, 0, 0.1, 0, 0, 0, 0, 0]; // slight Z bend
    idleTracks.push(new THREE.NumberKeyframeTrack(`.bones[${i}].rotation[z]`, idleTimes, values));
}
const idleClip = new THREE.AnimationClip('idle', 2, idleTracks);

// State 2: "Action" (Dynamic Coil)
const actionTimes = [0, 0.5, 1];
const actionTracks = [];
for (let i = 1; i < boneCount; i++) {
    const values = [0, 0, 0, 0, 0.5 * (i / boneCount), 0, 0, 0, 0]; // extreme coil
    actionTracks.push(new THREE.NumberKeyframeTrack(`.bones[${i}].rotation[z]`, actionTimes, values));
    const yValues = [0, 0, 0, 0, 0, Math.PI * 0.5, 0, 0, 0]; // spiral
    actionTracks.push(new THREE.NumberKeyframeTrack(`.bones[${i}].rotation[y]`, actionTimes, yValues));
}
const actionClip = new THREE.AnimationClip('action', 1, actionTracks);

const idleAction = mixer.clipAction(idleClip);
const actionAction = mixer.clipAction(actionClip);

idleAction.play();
actionAction.play();
actionAction.setEffectiveWeight(0);

// Interaction Logic
let currentState = 'idle';
const btnIdle = document.getElementById('btn-idle');
const btnAction = document.getElementById('btn-action');

const crossfade = (target) => {
    if (currentState === target) return;

    const fromAction = currentState === 'idle' ? idleAction : actionAction;
    const toAction = target === 'idle' ? idleAction : actionAction;

    toAction.enabled = true;
    toAction.setEffectiveWeight(1);
    toAction.crossFadeFrom(fromAction, 0.8, true);

    btnIdle.classList.toggle('active', target === 'idle');
    btnAction.classList.toggle('active', target === 'action');

    currentState = target;
};

btnIdle.onclick = () => crossfade('idle');
btnAction.onclick = () => crossfade('action');

// Grid Helper
const grid = new THREE.GridHelper(20, 20, 0x222222, 0x111111);
grid.position.y = -height / 2;
scene.add(grid);

// Animation Loop
const clock = new THREE.Clock();
const tick = () => {
    const deltaTime = clock.getDelta();
    mixer.update(deltaTime);
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
