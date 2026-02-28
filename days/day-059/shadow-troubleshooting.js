/**
 * shadow troubleshooting guide
 */

/**
 * problem: no shadows appear
 *
 * checklist:
 * - renderer.shadowMap.enabled = true?
 * - light.castShadow = true?
 * - object.castShadow = true?
 * - ground.receiveShadow = true?
 * - is light type correct? (Ambient can't cast shadows)
 */

/**
 * problem: shadow acne (stripes/patterns)
 *
 * cause: z-fighting on shadow map.
 * 
 * solution:
 * light.shadow.bias = -0.0001
 * increase magnitude if still present
 */

/**
 * problem: peter panning (detached shadows)
 *
 * cause: shadow bias too high.
 * 
 * solution:
 * reduce light.shadow.bias value
 * try -0.00001 or smaller
 */

/**
 * problem: pixelated/blocky shadows
 *
 * cause: shadow map resolution too low.
 * 
 * solution:
 * light.shadow.mapSize.width = 2048
 * light.shadow.mapSize.height = 2048
 */

/**
 * problem: shadows cut off at edges
 *
 * cause: shadow camera frustum too small.
 * 
 * solution (DirectionalLight):
 * light.shadow.camera.left = -20
 * light.shadow.camera.right = 20
 * light.shadow.camera.top = 20
 * light.shadow.camera.bottom = -20
 * 
 * use CameraHelper to visualize
 */

/**
 * problem: shadows too blurry
 *
 * cause: shadow camera frustum too large.
 * 
 * solution:
 * tighten frustum to fit scene exactly.
 * smaller frustum = sharper shadows.
 */

/**
 * problem: performance issues
 *
 * solutions:
 * - reduce shadow map size
 * - use fewer shadow-casting lights
 * - disable shadows on distant objects
 * - use BasicShadowMap instead of PCFSoft
 * - reduce shadow camera far distance
 */

/**
 * problem: no shadows from PointLight
 *
 * check:
 * - shadow.camera.far is large enough
 * - PointLight is within scene bounds
 * - objects are within light.distance range
 */

/**
 * debugging tool
 *
 * const helper = new THREE.CameraHelper(light.shadow.camera)
 * scene.add(helper)
 * 
 * shows exactly what shadow camera sees
 * update after changing shadow camera properties
 */
