/**
 * day 16 - renderer configuration
 */

/**
 * size
 *
 * renderer.setSize(width, height)
 *
 * this sets the drawing buffer size.
 * if it doesn't match the canvas size, the image can look stretched/blurry.
 */

/**
 * pixel ratio
 *
 * renderer.setPixelRatio(devicePixelRatio)
 *
 * higher pixel ratio => sharper image, but more pixels to shade.
 *
 * common pattern:
 *   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
 */

/**
 * clear color
 *
 * renderer.setClearColor(color, alpha)
 *
 * this is the background color used when clearing the frame buffer.
 */

/**
 * antialias
 *
 * new WebGLRenderer({ antialias: true })
 *
 * enables MSAA on the default framebuffer (when available).
 * makes edges smoother, but can cost performance.
 */

/**
 * color space / output
 *
 * modern three js uses color management.
 * output color space affects how colors are converted for display.
 *
 * typical:
 *   renderer.outputColorSpace = THREE.SRGBColorSpace
 */

/**
 * tone mapping + exposure
 *
 * tone mapping maps HDR lighting values into displayable range.
 * exposure is a simple multiplier.
 *
 * common settings:
 * - renderer.toneMapping = THREE.ACESFilmicToneMapping
 * - renderer.toneMappingExposure = 1.0
 */

/**
 * shadows (preview)
 *
 * enabling shadows has large performance costs.
 * (we will cover later, but note it's a renderer-level toggle)
 */

// renderer.shadowMap.enabled = true
