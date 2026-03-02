/**
 * shadow softness controls
 */

/**
 * shadow radius (PCFSoft + VSM)
 *
 * light.shadow.radius = 2
 * 
 * higher radius = softer shadows.
 * only works with PCFSoftShadowMap and VSMShadowMap.
 * too high causes artifacts.
 */

/**
 * shadow map size affects softness
 *
 * larger shadow map = sharper shadows.
 * smaller shadow map = blurrier shadows.
 * 
 * 512 = soft, 2048 = sharp.
 */

/**
 * shadow bias affects edge quality
 *
 * light.shadow.bias = -0.0001
 * 
 * too much bias causes detached shadows.
 * too little causes acne.
 */

/**
 * blur with VSM
 *
 * renderer.shadowMap.type = THREE.VSMShadowMap
 * light.shadow.radius = 4
 * 
 * VSM uses blur filter.
 * can look very soft but may bleed.
 */

/**
 * simulate soft shadows with larger light
 *
 * increasing light source size (not in three.js core)
 * use RectAreaLight for soft shadows (no shadows in core).
 * use lightmaps or contact shadows for softness.
 */

/**
 * contact shadows (advanced)
 *
 * screen-space contact shadows give soft results.
 * requires post-processing (not core three.js).
 */
