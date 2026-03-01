/**
 * day 60 - light helpers basics
 */

/**
 * DirectionalLightHelper
 *
 * shows the direction and position of a directional light.
 * 
 * const helper = new THREE.DirectionalLightHelper(light, 2, 0xffff00)
 * scene.add(helper)
 */

/**
 * PointLightHelper
 *
 * shows the position and sphere of influence.
 * 
 * const helper = new THREE.PointLightHelper(light, 0.5, 0xff00ff)
 * scene.add(helper)
 */

/**
 * SpotLightHelper
 *
 * shows the spotlight cone and position.
 * 
 * const helper = new THREE.SpotLightHelper(light)
 * scene.add(helper)
 * helper.update()  // call after changing light properties
 */

/**
 * HemisphereLightHelper
 *
 * shows the sky/ground light direction.
 * 
 * const helper = new THREE.HemisphereLightHelper(light, 2)
 * scene.add(helper)
 */

/**
 * RectAreaLightHelper
 *
 * shows the rectangular light area.
 * 
 * const helper = new RectAreaLightHelper(light)
 * scene.add(helper)
 */

/**
 * cleanup
 *
 * helpers should be removed in production:
 * scene.remove(helper)
 * helper.dispose()  // if supported
 */
