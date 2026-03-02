/**
 * shadow filtering tips
 */

/**
 * start with PCFShadowMap
 *
 * good balance of quality and performance.
 * upgrade to PCFSoft only if needed.
 */

/**
 * avoid VSM for production
 *
 * can cause light bleeding artifacts.
 * only use if very soft shadows are required.
 */

/**
 * adjust shadow radius carefully
 *
 * radius 1-3 is usually enough.
 * too high looks blurry and artificial.
 */

/**
 * increase map size before radius
 *
 * higher resolution gives cleaner edges.
 * add radius only after quality is good.
 */

/**
 * use bias to fight acne, not radius
 *
 * radius doesn't fix acne.
 * bias addresses z-fighting issues.
 */

/**
 * keep shadow map sizes power of two
 *
 * 512, 1024, 2048, 4096.
 * avoid non-power-of-two sizes.
 */

/**
 * reduce shadow camera frustum
 *
 * tighter frustum = sharper shadows.
 * best free quality upgrade.
 */

/**
 * monitor GPU cost
 *
 * each shadow map is a render pass.
 * use browser performance tools.
 */

/**
 * disable shadows for moving lights
 *
 * dynamic shadow maps update every frame.
 * expensive for moving lights.
 */

/**
 * use static shadow maps for static scenes
 *
 * renderer.shadowMap.autoUpdate = false
 * renderer.shadowMap.needsUpdate = true  // once
 */
