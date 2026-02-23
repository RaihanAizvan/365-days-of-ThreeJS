/**
 * day 54 - clamp-to-edge wrapping
 */

/**
 * what is clamp-to-edge?
 *
 * extends the edge pixels infinitely beyond texture boundaries.
 * UVs outside 0-1 range use the edge pixel color.
 */

/**
 * setting clamp-to-edge
 *
 * texture.wrapS = THREE.ClampToEdgeWrapping
 * texture.wrapT = THREE.ClampToEdgeWrapping
 */

/**
 * comparison with other modes
 *
 * RepeatWrapping: tiles the texture
 * MirroredRepeatWrapping: mirrors and tiles
 * ClampToEdgeWrapping: extends edge pixels
 */

/**
 * when to use clamp-to-edge
 *
 * - single non-repeating images
 * - preventing edge artifacts
 * - UI elements and overlays
 * - skyboxes (each face)
 */
