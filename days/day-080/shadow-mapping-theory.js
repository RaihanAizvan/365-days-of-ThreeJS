// day 80 — shadow mapping theory

/**
 * behind the scenes of shadows
 * 
 * 1. The Light's Secret Camera
 *    - DirectionalLight uses an OrthographicCamera internally because its rays are parallel.
 *    - PointLight uses a PerspectiveCamera (actually a CubeCamera that takes 6 renders!) 
 *    - SpotLight uses a PerspectiveCamera.
 * 
 * 2. The Frustum Problem
 *    - By default, the OrthographicCamera for a DirectionalLight is very small (often 5x5 units).
 *    - If an object is outside this invisible 5x5 box, it will NOT cast or receive a shadow, even if `castShadow = true`.
 * 
 * 3. The Resolution Problem
 *    - The shadow map is a texture (default 512x512 pixels).
 *    - If you make the light's camera frustum huge (e.g. 500x500 units) to cover a whole city, those 512 pixels are stretched 
 *      across the city. The shadows will look like giant minecraft blocks.
 *    - The golden rule: keep the shadow camera's frustum as tight to the action as possible.
 */

console.log('shadow optimization is a constant battle between frustum size and shadowMap resolution.');
