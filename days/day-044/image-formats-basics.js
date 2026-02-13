/**
 * day 44 - image formats
 */

/**
 * PNG (Portable Network Graphics)
 *
 * format: lossless compression
 * transparency: full RGBA support
 * uses: detailed images, logos, graphics with transparency
 * cons: larger file size than JPEG
 *
 * const loader = new THREE.TextureLoader()
 * const texture = loader.load('image.png')
 */

/**
 * JPEG (Joint Photographic Experts Group)
 *
 * format: lossy compression (quality 0-100)
 * transparency: no, uses RGB only
 * uses: photographs, continuous tone images
 * pros: excellent compression ratio
 * cons: visible artifacts if quality too low
 *
 * const loader = new THREE.TextureLoader()
 * const texture = loader.load('image.jpg')
 */

/**
 * WebP
 *
 * format: modern, supports both lossy and lossless
 * transparency: full RGBA support
 * uses: modern browsers, better compression than PNG/JPEG
 * pros: ~25% smaller files than PNG, ~25% smaller than JPEG
 * cons: older browsers may not support, needs fallback
 * browser support: Chrome, Firefox, Edge, Safari (partial)
 *
 * const loader = new THREE.TextureLoader()
 * const texture = loader.load('image.webp')
 *
 * // fallback approach
 * const textureUrl = browser.supportsWebP ? 'image.webp' : 'image.jpg'
 */

/**
 * EXR (OpenEXR)
 *
 * format: floating-point, high dynamic range (HDR)
 * bits: 16-bit or 32-bit per channel
 * uses: environment maps, lighting, professional rendering
 * pros: preserves HDR data, excellent for IBL (image based lighting)
 * cons: larger files, requires special loader
 *
 * import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
 * const exrLoader = new EXRLoader()
 * exrLoader.load('environment.exr', (texture) => {
 *   scene.background = texture
 *   scene.environment = texture
 * })
 */

/**
 * HDR (RGBE format)
 *
 * format: high dynamic range, 32-bit color + 8-bit exponent
 * uses: environment maps, lighting
 * pros: compact HDR format, good for web
 * cons: reduced precision compared to EXR
 *
 * import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
 * const rgbeLoader = new RGBELoader()
 * rgbeLoader.load('environment.hdr', (texture) => {
 *   texture.mapping = THREE.EquirectangularReflectionMapping
 *   scene.background = texture
 *   scene.environment = texture
 * })
 */

/**
 * KTX and KTX2 (Khronos Texture)
 *
 * format: container format for compressed textures
 * uses: GPU-native compression, game engines, performance-critical
 * pros: hardware-native compression (BC7, ETC, ASTC), faster loads
 * cons: more complex to generate, requires specific tooling
 */

/**
 * Format comparison table:
 *
 * Format | Compression | Transparency | File Size | Quality | Use Case
 * ------ | ----------- | ------------ | --------- | ------- | ---------
 * PNG    | Lossless    | Yes (RGBA)   | Large     | Perfect | Graphics, UI
 * JPEG   | Lossy       | No (RGB)     | Small     | Good    | Photographs
 * WebP   | Lossy/Loss  | Yes (RGBA)   | Smallest  | Good    | Modern web
 * EXR    | None (HDR)  | Yes (RGBA)   | Large     | Perfect | IBL, Lighting
 * HDR    | None (HDR)  | Yes (RGBA)   | Medium    | Perfect | IBL, Compact
 * KTX2   | GPU Native  | Yes (varies) | Very Smll | Good    | Performance
 */

/**
 * selection criteria:
 *
 * 1. content type:
 *    - photographic? → JPEG or WebP
 *    - graphics/logo? → PNG or WebP
 *    - HDR lighting? → EXR or HDR
 *
 * 2. transparency needed?
 *    - yes → PNG, WebP, EXR, or HDR
 *    - no → JPEG or WebP (lossy)
 *
 * 3. performance critical?
 *    - yes → WebP, KTX2, or compressed formats
 *    - no → any format works
 *
 * 4. browser support:
 *    - must support old browsers? → PNG, JPEG
 *    - modern only? → WebP
 *    - specialized rendering? → EXR, HDR, KTX2
 */

/**
 * texture compression on GPU:
 *
 * RGB vs RGBA:
 * - RGB: 8 bits per channel × 3 = 24 bits per pixel
 * - RGBA: 8 bits per channel × 4 = 32 bits per pixel
 * - memory matters! RGBA is 33% larger
 *
 * use RGB when alpha not needed
 */

/**
 * best practices:
 *
 * 1. optimize before loading:
 *    - use online tools (TinyPNG, Squoosh, etc.)
 *    - reduce resolution if appropriate
 *    - pick right format for content
 *
 * 2. provide fallbacks:
 *    - WebP with JPEG fallback
 *    - use picture element or script detection
 *
 * 3. mipmaps:
 *    - texture.generateMipmaps = true for downsampling
 *    - reduces artifacts on distant surfaces
 *    - enables better filtering
 *
 * 4. lazy loading:
 *    - load only when needed
 *    - use async texture loaders
 *
 * 5. caching:
 *    - let browser cache images
 *    - use service workers for offline support
 */
