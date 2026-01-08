/**
 * day 8 - three js scene setup
 *
 * this file is a mental model before we write a full runnable demo
 *
 * in three js there are 3 minimum parts to show anything
 * - scene: what exists in the world
 * - camera: from where we see the world
 * - renderer: the thing that draws the scene from the camera onto a canvas
 */

/**
 * scene
 *
 * a scene is like a container for objects
 * meshes, lights, and groups are added to it
 *
 * scene itself does not draw anything
 * it just holds a tree of objects (a scene graph)
 */
// const scene = new THREE.Scene()

/**
 * camera
 *
 * camera defines the view
 *
 * most of the time you will start with a PerspectiveCamera
 * - fov: how wide the view is (in degrees)
 * - aspect: width / height of the canvas
 * - near/far: which distances get rendered
 *
 * camera has a position in the world
 * moving the camera changes what you see
 */
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
// camera.position.set(x, y, z)

/**
 * renderer
 *
 * renderer is responsible for drawing pixels
 *
 * it needs:
 * - a canvas to draw into
 * - a size (width/height)
 *
 * the renderer does not know what to draw until you call
 * renderer.render(scene, camera)
 */
// const renderer = new THREE.WebGLRenderer({ canvas })
// renderer.setSize(width, height)

/**
 * one render
 *
 * a single render shows a single frame
 * if you never call render again, the picture will never update
 */
// renderer.render(scene, camera)

/**
 * animation loop
 *
 * if you want movement you repeat
 * - update positions/rotations
 * - render again
 *
 * requestAnimationFrame schedules your function before the next frame
 */
// function tick() {
//   // update
//   renderer.render(scene, camera)
//   requestAnimationFrame(tick)
// }
// tick()

/**
 * summary
 *
 * scene is the data
 * camera is the viewpoint
 * renderer draws the result
 *
 * three js feels like magic until you remember
 * you are just updating numbers then redrawing frames
 */
