/**
 * PBR workflow and texture pipeline
 */

/**
 * standard PBR texture set
 *
 * 1. albedo/base color (RGB)
 * 2. metalness (grayscale)
 * 3. roughness (grayscale)
 * 4. normal map (RGB)
 * 5. ambient occlusion (grayscale)
 * 6. height/displacement (optional)
 */

/**
 * texture packing optimization
 *
 * pack multiple maps into single texture:
 * - R channel: metalness
 * - G channel: roughness
 * - B channel: AO
 * - A channel: height
 */

/**
 * texture setup workflow
 *
 * const loader = new THREE.TextureLoader()
 * const albedo = loader.load('albedo.jpg')
 * const normal = loader.load('normal.jpg')
 * const metalRough = loader.load('metalRough.jpg')
 * 
 * material.map = albedo
 * material.normalMap = normal
 * material.metalnessMap = metalRough
 * material.roughnessMap = metalRough
 */

/**
 * color space considerations
 *
 * albedo: sRGB (material.map.colorSpace = THREE.SRGBColorSpace)
 * normal, metalness, roughness, AO: Linear
 */

/**
 * texture resolution guidelines
 *
 * hero objects: 2048x2048 or 4096x4096
 * standard objects: 1024x1024
 * background/distant: 512x512
 */

/**
 * PBR material from textures
 *
 * const material = new THREE.MeshStandardMaterial({
 *   map: albedoTexture,
 *   normalMap: normalTexture,
 *   metalnessMap: metalnessTexture,
 *   roughnessMap: roughnessTexture,
 *   aoMap: aoTexture,
 *   metalness: 1.0,  // multiplier for map
 *   roughness: 1.0   // multiplier for map
 * })
 */
