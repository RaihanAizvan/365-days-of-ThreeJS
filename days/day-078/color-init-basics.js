// day 78 — color initialization basics

import * as THREE from 'three';

// 1. The Hex approach (common but hard to "tint" programmatically)
const hexColor = 0xff0000; // Red

// 2. The String approach (great for UI/CSS integration)
const stringColor = '#ff0000'; // Also red

// 3. The Object approach (best for dynamic manipulation)
const lightColor = new THREE.Color();
// HSL = Hue (0-1), Saturation (0-1), Lightness (0-1)
lightColor.setHSL(0.1, 1.0, 0.5); // A warm orange-y hue

// You can re-assign colors directly
lightColor.set('#00ff00'); // Now it's green

const myLight = new THREE.PointLight(lightColor, 10, 100);

// Colors can also lerp (blend) just like vectors!
const targetColor = new THREE.Color('#0000ff');
// lightColor.lerp(targetColor, 0.1); 

console.log('THREE.Color gives you powerful math to manipulate visuals dynamically.');
