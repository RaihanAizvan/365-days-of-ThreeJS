// day 69 — mouse coordinates snippet

import * as THREE from 'three';

const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    // translate pixel coordinates to -1 to +1 (NDC)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
});

/**
 * Usage in tick loop:
 * 
 * raycaster.setFromCamera(mouse, camera);
 * const intersects = raycaster.intersectObjects(scene.children);
 */

console.log('always remember to negate the Y coordinate for NDC mapping.');
