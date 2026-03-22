import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Day 082: Shadow Resolution Demo
 */

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#e8e8e8');
scene.fog = new THREE.Fog('#e8e8e8', 10, 40);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Crucial: The algorithmic type we will switch dynamically
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap; // Start mathematically jagged
document.body.appendChild(renderer.domElement);

// Camera (Zoomed in fairly close to see the step artifacts!)
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(-6, 4, 8);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Materials
const material = new THREE.MeshStandardMaterial({
    color: '#3498db',
    roughness: 0.2,
    metalness: 0.1
});

const groundMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.9
});

// Floor
const floor = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), groundMaterial);
floor.rotation.x = -Math.PI * 0.5;
floor.receiveShadow = true;
scene.add(floor);

// Complex shadowing object (A tree/structure that drops intricate shadows)
const structure = new THREE.Group();

const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 4, 16), material);
trunk.position.y = 2;
trunk.castShadow = true;
trunk.receiveShadow = true;
structure.add(trunk);

const canopy1 = new THREE.Mesh(new THREE.DodecahedronGeometry(2), material);
canopy1.position.y = 4.5;
canopy1.castShadow = true;
canopy1.receiveShadow = true;
structure.add(canopy1);

const canopy2 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5), material);
canopy2.position.set(1.5, 3.5, 1);
canopy2.castShadow = true;
canopy2.receiveShadow = true;
structure.add(canopy2);

const canopy3 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5), material);
canopy3.position.set(-1.5, 3.5, -1);
canopy3.castShadow = true;
canopy3.receiveShadow = true;
structure.add(canopy3);

scene.add(structure);

// 1. Ambient Fill
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// 2. The Key Light casting shadows
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(8, 10, 5);
dirLight.castShadow = true;

// We ensure the frustum is large enough to encapsulate the tree.
// Keeping it somewhat large forces lower mapSizes to stretch, exacerbating the problem visually.
dirLight.shadow.camera.left = -10;
dirLight.shadow.camera.right = 10;
dirLight.shadow.camera.top = 10;
dirLight.shadow.camera.bottom = -10;
dirLight.shadow.camera.near = 1;
dirLight.shadow.camera.far = 30;

// Start mapSize at a noticeably terrible 256 for educational value.
dirLight.shadow.mapSize.set(256, 256);
dirLight.shadow.bias = -0.001;
dirLight.shadow.normalBias = 0.05;

scene.add(dirLight);

// Interactive UI Wiring
const resBtns = document.querySelectorAll('#resGroup button');
const resText = document.getElementById('resText');

resBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        resBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const size = parseInt(btn.dataset.res);
        resText.innerText = `${size}x${size}`;

        // Critical: changing shadow map size at runtime required disposing the old map
        if (dirLight.shadow.map) {
            dirLight.shadow.map.dispose();
            dirLight.shadow.map = null;
        }

        dirLight.shadow.mapSize.set(size, size);
    });
});

const algBtns = document.querySelectorAll('#algGroup button');
const algText = document.getElementById('algText');

algBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        algBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const isSoft = btn.dataset.soft === 'true';
        algText.innerText = isSoft ? 'ON' : 'OFF';

        // Changing the shadow algorithm requires the renderer to recompile all shaders!
        renderer.shadowMap.type = isSoft ? THREE.PCFSoftShadowMap : THREE.BasicShadowMap;

        // Force recompilation by flagging materials that use this light
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.needsUpdate = true;
            }
        });
    });
});


// Animation Loop
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Slowly rotate structure to watch the jagged edges move
    structure.rotation.y = elapsedTime * 0.2;

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
