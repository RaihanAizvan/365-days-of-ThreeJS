/**
 * day 61 - shadow map types
 */

/**
 * BasicShadowMap
 *
 * fastest, lowest quality.
 * jagged hard shadows.
 * no filtering.
 * 
 * renderer.shadowMap.type = THREE.BasicShadowMap
 */

/**
 * PCFShadowMap
 *
 * percentage-closer filtering.
 * smoother edges than Basic.
 * default in three.js.
 * 
 * renderer.shadowMap.type = THREE.PCFShadowMap
 */

/**
 * PCFSoftShadowMap
 *
 * softer shadows than PCF.
 * more samples -> softer edges.
 * slightly more expensive.
 * 
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap
 */

/**
 * VSMShadowMap
 *
 * variance shadow map.
 * very soft, blur-based.
 * prone to light bleeding artifacts.
 * experimental in three.js.
 * 
 * renderer.shadowMap.type = THREE.VSMShadowMap
 */

/**
 * recommended usage
 *
 * mobile: BasicShadowMap or PCFShadowMap
 * desktop: PCFSoftShadowMap
 * avoid VSM unless you need very soft shadows
 */

/**
 * switching shadow map types
 *
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap
 * renderer.shadowMap.needsUpdate = true
 */
