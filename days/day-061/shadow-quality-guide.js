/**
 * shadow quality guide by platform
 */

/**
 * mobile targets
 *
 * shadow type: BasicShadowMap or PCFShadowMap
 * shadow map size: 512 or 1024
 * lights with shadows: 1
 * shadow radius: 1
 */

/**
 * mid-range desktop
 *
 * shadow type: PCFShadowMap
 * shadow map size: 1024 or 2048
 * lights with shadows: 1-2
 * shadow radius: 2
 */

/**
 * high-end desktop
 *
 * shadow type: PCFSoftShadowMap
 * shadow map size: 2048
 * lights with shadows: 2
 * shadow radius: 2-3
 */

/**
 * hero/cinematic
 *
 * shadow type: PCFSoftShadowMap
 * shadow map size: 4096
 * lights with shadows: 2-3
 * shadow radius: 3-4
 */

/**
 * debug setup
 *
 * shadow type: BasicShadowMap
 * shadow map size: 256
 * fastest iteration
 */

/**
 * quick fallback
 *
 * if FPS drops below target:
 * - reduce shadow map size
 * - switch from PCFSoft to PCF
 * - disable shadow on secondary lights
 */
