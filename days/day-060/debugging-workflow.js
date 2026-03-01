/**
 * lighting debugging workflow
 */

/**
 * step 1: add helpers
 *
 * DirectionalLightHelper
 * PointLightHelper
 * SpotLightHelper
 * CameraHelper (shadow camera)
 */

/**
 * step 2: inspect light positions
 *
 * verify lights are not inside geometry.
 * ensure lights point at targets.
 */

/**
 * step 3: check shadow camera bounds
 *
 * use CameraHelper to see frustum.
 * ensure frustum covers all casting objects.
 */

/**
 * step 4: adjust intensity and color
 *
 * lighting feels too flat? increase key light.
 * shadows too harsh? add fill light.
 */

/**
 * step 5: tune shadow bias
 *
 * shadow acne? reduce bias (more negative).
 * peter panning? increase bias (less negative).
 */

/**
 * step 6: remove helpers
 *
 * once lighting is correct, remove helpers
 * for production/performance.
 */

/**
 * optional: live GUI controls
 *
 * use lil-gui or tweakpane to
 * live-edit light properties.
 */
