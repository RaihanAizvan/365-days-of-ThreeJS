/**
 * day 44 - image optimization tips
 */

/**
 * optimization strategies
 *
 * 1. RESIZE IMAGES:
 *    reduce dimensions to what you actually need
 *    1024×1024 is often overkill for web
 *    consider 512×512 or 256×256 when possible
 *
 * 2. CHOOSE RIGHT FORMAT:
 *    PNG for graphics with transparency
 *    JPEG for photographs (quality 75-85 is often imperceptible)
 *    WebP for modern browsers (20-30% smaller)
 *
 * 3. REMOVE METADATA:
 *    use tools to strip EXIF, color profiles, etc.
 *    saves 1-5KB per image
 *
 * 4. USE COMPRESSION TOOLS:
 *    TinyPNG - drag and drop, works great
 *    Squoosh - Google's web-based compressor
 *    ImageMagick - command line
 */

/**
 * practical compression commands (using ImageMagick)
 *
 * // resize and compress PNG
 * convert input.png -resize 512x512 -colors 256 output.png
 *
 * // convert to WebP with quality 80
 * cwebp -q 80 input.jpg -o output.webp
 *
 * // resize and compress JPEG
 * convert input.jpg -resize 512x512 -quality 80 output.jpg
 *
 * // strip metadata
 * convert input.jpg -strip -quality 85 output.jpg
 */

/**
 * loading strategies
 *
 * 1. PRELOAD CRITICAL TEXTURES:
 *    load immediately, use Promise-based loader
 *    const loader = new THREE.TextureLoader()
 *    const texture = await loader.loadAsync('critical.jpg')
 *
 * 2. LAZY LOAD NON-CRITICAL:
 *    wait for other resources, background loading
 *    schedule load after scene ready
 *
 * 3. USE MANAGER FOR PROGRESS:
 *    track loading progress
 *    show loading bar
 *
 * const manager = new THREE.LoadingManager()
 * manager.onProgress = (url, loaded, total) => {
 *   console.log(`Loading: ${Math.round(loaded/total * 100)}%`)
 * }
 * const loader = new THREE.TextureLoader(manager)
 */

/**
 * mipmapping impact:
 *
 * generateMipmaps = true:
 *   + better quality on distant surfaces
 *   + reduces aliasing artifacts
 *   - uses 1.33× more memory
 *
 * generateMipmaps = false:
 *   + saves 33% memory
 *   - visible aliasing on distant objects
 *   - performance slightly worse due to texture lookups
 *
 * recommendation: enable for production, especially outdoor scenes
 */

/**
 * WebP fallback pattern:
 *
 * function getTextureUrl(baseName) {
 *   const webpSupported = () => {
 *     const canvas = document.createElement('canvas')
 *     canvas.width = 1
 *     canvas.height = 1
 *     return canvas.toDataURL('image/webp').indexOf('image/webp') === 5
 *   }
 *   return webpSupported() ? `${baseName}.webp` : `${baseName}.jpg`
 * }
 *
 * const textureUrl = getTextureUrl('textures/wood')
 * loader.load(textureUrl, (texture) => {
 *   material.map = texture
 * })
 */

/**
 * caching headers:
 *
 * For static textures, set cache headers:
 * - Cache-Control: max-age=31536000 (1 year)
 * - This tells browsers to cache aggressively
 *
 * For dynamic/versioned assets:
 * - append version: texture.jpg?v=1.2.3
 * - or content hash: texture.abc123.jpg
 */

/**
 * memory profiling:
 *
 * // check texture memory
 * console.log('WebGL Memory:', renderer.info.memory)
 * // outputs textures count and size
 *
 * // typical sizes per texture:
 * 512×512 RGBA = 1 MB
 * 1024×1024 RGBA = 4 MB
 * 2048×2048 RGBA = 16 MB (with mipmaps = ~21 MB)
 *
 * // be aware of VRAM limits:
 * - desktop: 2-8 GB
 * - mobile: 256 MB - 1 GB
 */

/**
 * texture atlasing:
 *
 * combine multiple small textures into one large texture
 * reduces draw calls and texture binding overhead
 *
 * pros: better performance, fewer materials
 * cons: less flexibility, requires UV layout planning
 *
 * tools: TexturePacker, Marmoset, custom scripts
 */

/**
 * normal map compression:
 *
 * normal maps don't need full 8 bits per channel
 * can use 16-bit formats to save memory
 *
 * also: encode normals in specific format
 * - OpenGL: xyz stored directly
 * - DirectX: z calculated from xy (saves space)
 */

/**
 * basis universal compression:
 *
 * universal format transcodes to GPU-native compression
 * excellent for cross-platform support
 *
 * import { BasisTextureLoader } from 'three/examples/jsm/loaders/BasisTextureLoader.js'
 * const basisLoader = new BasisTextureLoader()
 * basisLoader.load('texture.basis', (texture) => {
 *   material.map = texture
 * })
 */

/**
 * summary: optimization checklist
 *
 * ✓ resize to actual needed dimensions
 * ✓ choose appropriate format (JPEG/PNG/WebP)
 * ✓ compress with tools (TinyPNG/Squoosh)
 * ✓ strip metadata
 * ✓ enable mipmaps for quality
 * ✓ lazy load non-critical textures
 * ✓ use loading manager for progress
 * ✓ provide WebP fallbacks
 * ✓ set cache headers
 * ✓ monitor VRAM usage
 * ✓ consider atlasing for many textures
 */
