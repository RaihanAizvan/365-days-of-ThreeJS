/**
 * color space tips and best practices
 */

/**
 * always set renderer output color space
 *
 * renderer.outputColorSpace = THREE.SRGBColorSpace
 * ensures correct display on monitors.
 */

/**
 * only color textures use sRGB
 *
 * albedo, emissive, UI.
 * everything else stays linear.
 */

/**
 * check texture defaults
 *
 * textures are linear by default.
 * you must manually set sRGB for color textures.
 */

/**
 * use tone mapping with PBR
 *
 * renderer.toneMapping = THREE.ACESFilmicToneMapping
 * renderer.toneMappingExposure = 1.0
 */

/**
 * mismatched color space symptoms
 *
 * too dark: forgot sRGB on color texture.
 * too bright/washed: applied sRGB to data textures.
 */

/**
 * use ColorManagement API (r152+)
 *
 * THREE.ColorManagement.enabled = true
 * auto handles some color conversions.
 */

/**
 * keep UI textures in sRGB
 *
 * ensures text and UI colors are correct.
 */

/**
 * use correct export settings
 *
 * export albedo/base color textures in sRGB.
 * export data textures in linear.
 */

/**
 * validate with a color chart
 *
 * use a known sRGB reference texture
 * to confirm pipeline is correct.
 */
