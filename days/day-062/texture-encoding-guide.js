/**
 * texture encoding guide
 */

/**
 * color textures (use sRGB)
 *
 * - base color / albedo
 * - diffuse map
 * - emissive map
 * - UI textures
 *
 * texture.colorSpace = THREE.SRGBColorSpace
 */

/**
 * data textures (keep linear)
 *
 * - normal maps
 * - roughness maps
 * - metalness maps
 * - ambient occlusion
 * - height/displacement
 * - alpha masks
 */

/**
 * environment maps
 *
 * environment maps should be sRGB if they represent color.
 * three.js handles PMREM conversion automatically.
 * 
 * envMap.colorSpace = THREE.SRGBColorSpace
 */

/**
 * render targets
 *
 * render targets are usually linear.
 * only convert to sRGB at final output.
 */

/**
 * legacy encoding names
 *
 * older three.js used texture.encoding:
 * - THREE.sRGBEncoding
 * - THREE.LinearEncoding
 * 
 * new API uses colorSpace property instead.
 */

/**
 * common mistake
 *
 * setting all textures to sRGB.
 * makes normals and roughness wrong.
 * results in incorrect lighting.
 */
