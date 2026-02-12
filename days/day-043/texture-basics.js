/**
 * day 43 - texture basics
 */

/**
 * load textures
 *
 * const loader = new THREE.TextureLoader()
 * const texture = loader.load('/path/to/image.jpg')
 */

/**
 * apply to material
 *
 * const material = new THREE.MeshStandardMaterial({ map: texture })
 */

/**
 * uv coordinates
 *
 * UVs define how textures map onto geometry.
 * U and V range from 0..1.
 */

/**
 * wrapping
 *
 * texture.wrapS / wrapT controls tiling:
 * - THREE.RepeatWrapping
 * - THREE.ClampToEdgeWrapping
 */

/**
 * filtering
 *
 * texture.minFilter / magFilter control how textures scale.
 */
