/**
 * light helper tips and best practices
 */

/**
 * keep helpers in dev only
 *
 * wrap in a debug flag:
 * if (debug) scene.add(helper)
 */

/**
 * update helpers after changing lights
 *
 * SpotLightHelper and DirectionalLightHelper
 * need helper.update() after modifications.
 */

/**
 * use contrasting colors
 *
 * helpers should stand out from scene.
 * set helper color to bright values.
 */

/**
 * helpers affect performance slightly
 *
 * remove them in production.
 * they add extra draw calls.
 */

/**
 * combine with axes helper
 *
 * scene.add(new THREE.AxesHelper(5))
 * easier to read light positions.
 */

/**
 * debug light targets
 *
 * directional and spot lights use targets.
 * move light.target.position and add
 * a small sphere to visualize target.
 */

/**
 * visualize shadow bounds
 *
 * CameraHelper shows shadow frustum.
 * tighten frustum for sharper shadows.
 */

/**
 * toggle helpers with keyboard
 *
 * window.addEventListener('keydown', (e) => {
 *   if (e.key === 'h') helper.visible = !helper.visible
 * })
 */
