import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 067: Skinned Meshes & Bones Demo
 * 
 * This demo creates a simple cylinder and rigs it manually with two bones
 * to demonstrate how bone movement deforms the mesh vertices.
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1a1a1a');

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(5, 5, 5);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 1. Create Bones
const rootBone = new THREE.Bone();
const midBone = new THREE.Bone();
const topBone = new THREE.Bone();

rootBone.add(midBone);
midBone.add(topBone);

midBone.position.y = 2;
topBone.position.y = 2;

// 2. Create Geometry and Weights
const segmentHeight = 2;
const segmentCount = 2;
const height = segmentHeight * segmentCount;
const halfHeight = height * 0.5;

const sizing = {
    segmentHeight,
    segmentCount,
    height,
    halfHeight
};

const geometry = new THREE.CylinderGeometry(
    0.5, 0.5, sizing.height, 8, sizing.segmentCount * 3, true
);

const position = geometry.attributes.position;

const skinIndices = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
    const y = position.getY(i) + sizing.halfHeight; // normalize Y to 0-4

    const skinIndex = Math.floor(y / sizing.segmentHeight);
    const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;

    skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
}

geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

// 3. Create SkinnedMesh
const material = new THREE.MeshStandardMaterial({
    color: '#3498db',
    wireframe: true,
    side: THREE.DoubleSide
});

const mesh = new THREE.SkinnedMesh(geometry, material);
const skeleton = new THREE.Skeleton([rootBone, midBone, topBone]);

mesh.add(rootBone); // Bone hierarchy must be added to the mesh
mesh.bind(skeleton);

scene.add(mesh);

// Helper to see bones
const skeletonHelper = new THREE.SkeletonHelper(mesh);
scene.add(skeletonHelper);

// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Move bones procedurally
    midBone.rotation.z = Math.sin(elapsedTime) * 0.5;
    topBone.rotation.z = Math.sin(elapsedTime * 1.5) * 0.5;

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
