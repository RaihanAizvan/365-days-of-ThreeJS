/**
 * shadow quality presets for different platforms
 */

/**
 * low quality (mobile, low-end)
 *
 * renderer.shadowMap.enabled = true
 * renderer.shadowMap.type = THREE.BasicShadowMap
 * 
 * light.shadow.mapSize.width = 512
 * light.shadow.mapSize.height = 512
 * light.shadow.bias = -0.0005
 * 
 * // enable shadows on 1 light only
 * // minimal objects with castShadow
 */

/**
 * medium quality (desktop default)
 *
 * renderer.shadowMap.enabled = true
 * renderer.shadowMap.type = THREE.PCFShadowMap
 * 
 * light.shadow.mapSize.width = 1024
 * light.shadow.mapSize.height = 1024
 * light.shadow.bias = -0.0001
 * 
 * // 1-2 lights with shadows
 * // moderate object count
 */

/**
 * high quality (desktop high-end)
 *
 * renderer.shadowMap.enabled = true
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap
 * 
 * light.shadow.mapSize.width = 2048
 * light.shadow.mapSize.height = 2048
 * light.shadow.bias = -0.00001
 * 
 * // 2-3 lights with shadows
 * // tight shadow camera frustum
 */

/**
 * ultra quality (hero objects only)
 *
 * renderer.shadowMap.enabled = true
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap
 * 
 * light.shadow.mapSize.width = 4096
 * light.shadow.mapSize.height = 4096
 * light.shadow.bias = -0.00001
 * light.shadow.camera tightly fitted
 * 
 * // use sparingly, very expensive
 */

/**
 * dynamic quality adjustment
 *
 * function setQualityLevel(level) {
 *   switch(level) {
 *     case 'low':
 *       renderer.shadowMap.type = THREE.BasicShadowMap
 *       updateShadowMapSize(512)
 *       break
 *     case 'medium':
 *       renderer.shadowMap.type = THREE.PCFShadowMap
 *       updateShadowMapSize(1024)
 *       break
 *     case 'high':
 *       renderer.shadowMap.type = THREE.PCFSoftShadowMap
 *       updateShadowMapSize(2048)
 *       break
 *   }
 * }
 */

/**
 * per-light quality
 *
 * // hero light (main shadows)
 * heroLight.shadow.mapSize.width = 2048
 * 
 * // secondary light
 * fillLight.shadow.mapSize.width = 1024
 * 
 * // accent light
 * accentLight.castShadow = false  // no shadows
 */
