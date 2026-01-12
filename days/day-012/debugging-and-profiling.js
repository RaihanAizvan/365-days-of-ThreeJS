/**
 * debugging and profiling for three js
 */

/**
 * devtools console
 *
 * - log camera position
 * - log object matrices
 * - check renderer.info
 */

// console.log(camera.position)
// console.log(mesh.position)
// console.log(renderer.info)

/**
 * renderer.info quick read
 *
 * - renderer.info.render.calls => draw calls (cpu-side pressure)
 * - renderer.info.render.triangles => triangle count
 * - renderer.info.memory.geometries/textures => gpu resource counts
 */

/**
 * common debugging checklist
 *
 * nothing shows:
 * - is the camera looking at the object (camera.lookAt)?
 * - is the object in front of the camera (z sign)?
 * - is the renderer size correct?
 * - are you calling renderer.render in a loop?
 *
 * black objects:
 * - material might need lights (MeshStandard/Phong)
 * - try MeshBasicMaterial to test geometry visibility
 */

/**
 * performance tools
 *
 * browser:
 * - performance tab (record a few seconds)
 * - fps meter (chrome rendering panel)
 *
 * three js:
 * - renderer.info
 * - stats.js (optional overlay)
 */

/**
 * when to reach for a bundler (later)
 *
 * once demos get bigger you usually want:
 * - fast dev server + HMR
 * - asset imports
 * - npm deps locked
 *
 * common choices: vite, parcel
 */
