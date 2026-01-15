/**
 * day 15 - camera perspectives
 */

/**
 * perspective camera
 *
 * PerspectiveCamera(fov, aspect, near, far)
 *
 * - fov: field of view in degrees (vertical fov)
 * - aspect: width / height
 * - near/far: clipping planes (must be > 0)
 *
 * perspective means:
 * - objects farther away appear smaller
 */

/**
 * orthographic camera
 *
 * OrthographicCamera(left, right, top, bottom, near, far)
 *
 * no perspective distortion:
 * - objects keep the same size regardless of distance
 *
 * common uses:
 * - 2d overlays
 * - isometric scenes
 * - editor views
 */

/**
 * why near/far matters
 *
 * near/far controls what is visible, but also affects depth precision.
 * huge ranges (near=0.001, far=100000) reduce depth precision and can cause z-fighting.
 *
 * good habit: keep near as large as possible and far as small as possible.
 */

/**
 * resize rule
 *
 * when the canvas size changes:
 * - update camera.aspect (perspective)
 * - update camera left/right/top/bottom (ortho)
 * - call camera.updateProjectionMatrix()
 */

/**
 * mental model: projection
 *
 * camera projection is what turns 3d into 2d:
 * - perspective projection gives depth scaling
 * - orthographic projection is a parallel projection
 */
