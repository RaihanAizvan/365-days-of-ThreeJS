/**
 * day 60 - shadow camera helpers
 */

/**
 * CameraHelper for shadow frustums
 *
 * visualizes the shadow camera area.
 * works for DirectionalLight, SpotLight, and PointLight.
 *
 * const helper = new THREE.CameraHelper(light.shadow.camera)
 * scene.add(helper)
 */

/**
 * updating helpers
 *
 * after changing shadow camera settings:
 * helper.update()
 * 
 * example:
 * light.shadow.camera.left = -10
 * helper.update()
 */

/**
 * when to use
 *
 * - shadows are cut off
 * - shadows are blurry
 * - performance tuning
 * - verifying frustum bounds
 */

/**
 * typical workflow
 *
 * 1. enable helper
 * 2. adjust shadow camera bounds
 * 3. ensure frustum tightly fits scene
 * 4. disable helper for production
 */

/**
 * directional light shadow camera
 *
 * const helper = new THREE.CameraHelper(directionalLight.shadow.camera)
 * scene.add(helper)
 */

/**
 * spot light shadow camera
 *
 * const helper = new THREE.CameraHelper(spotLight.shadow.camera)
 * scene.add(helper)
 */

/**
 * point light shadow camera
 *
 * point lights use a cube camera.
 * CameraHelper works but shows a single face.
 * use PointLightHelper for position.
 */
