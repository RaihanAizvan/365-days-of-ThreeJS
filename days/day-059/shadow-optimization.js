/**
 * shadow optimization tips
 */

/**
 * limit shadow-casting objects
 *
 * not every object needs castShadow = true.
 * enable only on important/visible objects.
 * small objects far away don't need shadows.
 */

/**
 * limit shadow-receiving objects
 *
 * typically only ground/floors need receiveShadow.
 * walls and ceilings usually don't.
 */

/**
 * limit shadow-casting lights
 *
 * shadows are expensive per light.
 * use 1-2 shadow-casting lights max.
 * other lights can skip shadows.
 */

/**
 * optimize shadow map size
 *
 * start with 1024x1024.
 * increase only if quality is poor.
 * 2048 is usually enough.
 * 4096 for hero objects only.
 */

/**
 * tighten shadow camera frustum
 *
 * smaller frustum = better resolution.
 * use CameraHelper to visualize.
 * fit frustum to visible shadow area only.
 */

/**
 * use appropriate shadow map type
 *
 * mobile: BasicShadowMap or PCFShadowMap
 * desktop: PCFSoftShadowMap
 * avoid VSMShadowMap (buggy)
 */

/**
 * disable shadows on distant objects
 *
 * check distance and toggle castShadow.
 * 
 * if (mesh.position.distanceTo(camera.position) > 50) {
 *   mesh.castShadow = false
 * } else {
 *   mesh.castShadow = true
 * }
 */

/**
 * use baked shadows for static scenes
 *
 * render shadows to texture offline.
 * apply as lightmap or alpha map.
 * no runtime shadow cost.
 */

/**
 * performance ranking (lights)
 *
 * DirectionalLight: moderate cost
 * SpotLight: high cost
 * PointLight: very high cost (6 shadow maps)
 */

/**
 * avoid PointLight shadows if possible
 *
 * uses 6 shadow maps (cube map).
 * 6x more expensive than DirectionalLight.
 * fake with DirectionalLight instead.
 */
