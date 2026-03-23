// day 83 — camera helper theory

/**
 * seeing the unseeable
 * 
 * 1. The Observer Effect
 *    - A camera in Three.js cannot see itself. To visualize a camera (its lens, its FOV, its depth), 
 *      you must render the scene from the perspective of an entirely different camera.
 * 
 * 2. Visual Anatomy of a CameraHelper
 *    - Crosshairs: The exact focal point and image plane.
 *    - Near Plane: The small rectangle close to the lens. Anything closer than this is culled (discarded).
 *    - Far Plane: The large rectangle far away. Anything past this is culled.
 *    - Cone/Pyramid Lines: The Field of View (FOV).
 * 
 * 3. The Need for Updates
 *    - If you change a camera's properties (like `camera.far = 10` or `camera.fov = 90`), 
 *      the helper will NOT reflect this automatically.
 *    - You must call `camera.updateProjectionMatrix()` followed by `cameraHelper.update()`.
 */

console.log('to debug a camera, you must become a spectator of the scene.');
