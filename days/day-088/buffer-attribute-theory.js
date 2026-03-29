// day 88 — buffer attribute theory

/**
 * speaking the gpu's language
 * 
 * 1. Why Not Use Objects?
 *    - In Javascript, we love objects: `[{x:1, y:2, z:3}, {x:2, y:3, z:4}]`.
 *    - The GPU hates objects. The GPU wants a massive, single, uninterrupted sequence of raw numbers.
 *    - `[1, 2, 3, 2, 3, 4]`.
 * 
 * 2. Float32Array
 *    - A standard JS `Array` is dynamic and slow.
 *    - A `Float32Array` is a precisely-sized chunk of memory dedicated purely to decimals.
 *    - If you want 1,000 particles, you need an array that is 3,000 mathematical slots long 
 *      (1,000 * 3 coords for X, Y, and Z).
 * 
 * 3. BufferAttribute
 *    - Once you pack your 3,000 numbers into the `Float32Array`, you must tell Three.js how 
 *      to read it.
 *    - `new THREE.BufferAttribute(array, 3)` tells the engine "Take this massive list, and 
 *      read it in chunks of 3 (X, Y, Z)".
 */

console.log('typed arrays are the key to unlocking millions of vertices at 60fps.');
