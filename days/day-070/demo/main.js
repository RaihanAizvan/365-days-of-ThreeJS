import * as THREE from 'three';

/**
 * day 070: scroll logic & parallax demo
 */

// scene
const scene = new THREE.Scene();

// renderer
const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// camera
const cameragroup = new THREE.Group();
scene.add(cameragroup);

const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 6;
cameragroup.add(camera);

// objects
const objectsdistance = 4;

const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    new THREE.MeshStandardMaterial({ color: '#f77062' })
);
const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    new THREE.MeshStandardMaterial({ color: '#fe5196' })
);
const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    new THREE.MeshStandardMaterial({ color: '#f77062' })
);

mesh1.position.y = - objectsdistance * 0;
mesh2.position.y = - objectsdistance * 1;
mesh3.position.y = - objectsdistance * 2;

mesh1.position.x = 2;
mesh2.position.x = -2;
mesh3.position.x = 2;

scene.add(mesh1, mesh2, mesh3);
const sectionmeshes = [mesh1, mesh2, mesh3];

// lights
const directionallight = new THREE.DirectionalLight(0xffffff, 3);
directionallight.position.set(1, 1, 0);
scene.add(directionallight);

// scroll handling
let scrolly = window.scrolly;
let currentsection = 0;

window.addEventListener('scroll', () => {
    scrolly = window.scrolly;

    const newsection = Math.round(scrolly / window.innerheight);
    if (newsection !== currentsection) {
        currentsection = newsection;
    }
});

// cursor for parallax
const cursor = { x: 0, y: 0 };
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / window.innerWidth - 0.5;
    cursor.y = event.clientY / window.innerHeight - 0.5;
});

// animation loop
const clock = new THREE.Clock();
let previoustime = 0;

const tick = () => {
    const elapsedtime = clock.getElapsedTime();
    const deltatime = elapsedtime - previoustime;
    previoustime = elapsedtime;

    // animate camera (scroll + parallax)
    // scroll mapping
    const targety = - scrolly / window.innerHeight * objectsdistance;
    camera.position.y += (targety - camera.position.y) * 5 * deltatime; // smooth lerp

    // parallax
    const parallaxx = cursor.x * 0.5;
    const parallaxy = - cursor.y * 0.5;
    cameragroup.position.x += (parallaxx - cameragroup.position.x) * 5 * deltatime;
    cameragroup.position.y += (parallaxy - cameragroup.position.y) * 5 * deltatime;

    // animate meshes
    for (const mesh of sectionmeshes) {
        mesh.rotation.x += deltatime * 0.1;
        mesh.rotation.y += deltatime * 0.12;
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();

// resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
