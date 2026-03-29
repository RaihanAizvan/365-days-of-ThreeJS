// day 89 — sprites theory

/**
 * the standalone billboard
 * 
 * 1. Points vs Sprites
 *    - `THREE.Points` renders 1,000,000 identical tiny squares based on a single generic geometry's vertices.
 *    - `THREE.Sprite` is a standalone object. It has its own `position`, `scale`, and `rotation` (though 
 *      its rotation is locked to the camera). You rarely put 1,000,000 sprites in a scene; you use them for 
 *      specific, uniquely placed 2D elements like health bars hovering over an enemy's head, or text labels.
 * 
 * 2. SpriteMaterials
 *    - Unlike standard materials, a `SpriteMaterial` has no concept of lighting. It is inherently flat.
 *    - It supports `map` and `alphaMap` perfectly, meaning it's incredibly easy to paste a PNG image 
 *      into the world and let it float around.
 *    - Sprites automatically scale via WebGL based on depth, getting smaller as they physically recede.
 * 
 * 3. Canvas Integration
 *    - Because HTML `<canvas>` elements can draw crisp 2D text, a highly common trick is to draw text 
 *      onto a hidden canvas, pass that canvas to a `THREE.CanvasTexture`, and map that texture onto a Sprite.
 *      This allows dynamic 3D name-tags without loading heavy 3D font geometry.
 */

console.log('Use Points for rain. Use a Sprite for a floating "Click Here" button over a chest.');
