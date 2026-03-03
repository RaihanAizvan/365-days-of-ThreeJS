/**
 * color space checklist
 */

/**
 * renderer
 *
 * [ ] renderer.outputColorSpace = THREE.SRGBColorSpace
 * [ ] renderer.toneMapping configured (if using PBR)
 */

/**
 * color textures
 *
 * [ ] base color / albedo set to sRGB
 * [ ] emissive maps set to sRGB
 * [ ] UI textures set to sRGB
 */

/**
 * data textures
 *
 * [ ] normal maps stay linear
 * [ ] roughness maps stay linear
 * [ ] metalness maps stay linear
 * [ ] AO maps stay linear
 * [ ] height maps stay linear
 */

/**
 * environment maps
 *
 * [ ] env maps use correct color space
 * [ ] PMREM conversion for PBR
 */

/**
 * debugging
 *
 * [ ] colors match reference image
 * [ ] no washed out or overly dark look
 */
