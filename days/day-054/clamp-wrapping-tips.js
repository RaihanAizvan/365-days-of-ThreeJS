/**
 * clamp-to-edge wrapping tips
 */

/**
 * use for non-repeating textures.
 * 
 * prevents visible seams at edges.
 */

/**
 * combine with texture transforms carefully.
 * 
 * offset/rotation can expose edge clamping.
 */

/**
 * default for most image textures.
 * 
 * THREE.ClampToEdgeWrapping is often the safest choice.
 */

/**
 * performance notes.
 * 
 * no performance difference between wrapping modes.
 * choice is purely visual.
 */

/**
 * UV coordinates beyond 0-1.
 * 
 * UV = 1.5 uses the color at UV = 1.0
 * UV = -0.5 uses the color at UV = 0.0
 */

/**
 * common use cases.
 * 
 * - character textures
 * - UI elements
 * - decals
 * - skybox faces
 */
