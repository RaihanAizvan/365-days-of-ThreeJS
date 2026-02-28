/**
 * shadow configuration and quality settings
 */

/**
 * shadow map resolution
 *
 * light.shadow.mapSize.width = 1024
 * light.shadow.mapSize.height = 1024
 * 
 * common sizes: 512, 1024, 2048, 4096
 * higher = better quality, worse performance
 */

/**
 * DirectionalLight shadow camera
 *
 * light.shadow.camera.left = -10
 * light.shadow.camera.right = 10
 * light.shadow.camera.top = 10
 * light.shadow.camera.bottom = -10
 * light.shadow.camera.near = 0.5
 * light.shadow.camera.far = 50
 * 
 * defines the area that casts shadows
 */

/**
 * PointLight shadow camera
 *
 * light.shadow.camera.near = 0.5
 * light.shadow.camera.far = 500
 * 
 * uses cube map (6 directions)
 * most expensive shadow type
 */

/**
 * SpotLight shadow camera
 *
 * light.shadow.camera.near = 0.5
 * light.shadow.camera.far = 500
 * light.shadow.camera.fov = 50
 * 
 * uses perspective camera
 */

/**
 * shadow bias (fixes artifacts)
 *
 * light.shadow.bias = -0.0001
 * 
 * too high: peter panning (shadow detaches)
 * too low: shadow acne (stripes)
 * start at -0.0001 and adjust
 */

/**
 * shadow radius (blur amount)
 *
 * light.shadow.radius = 4
 * 
 * only works with VSMShadowMap
 * blurs shadow edges
 */

/**
 * shadow camera helper (debugging)
 *
 * const helper = new THREE.CameraHelper(light.shadow.camera)
 * scene.add(helper)
 * 
 * visualizes shadow camera frustum
 */
