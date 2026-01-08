/**
 * sizing and pixel ratio (practical renderer basics)
 *
 * once you can render, the next common problems are
 * - canvas size not matching the browser
 * - blurry rendering on high dpi screens
 *
 * this file explains the ideas as notes
 */

/**
 * resize
 *
 * if the window changes size, your camera aspect must change too
 * and the renderer size must be updated
 */

// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight
// }
//
// window.addEventListener('resize', () => {
//   sizes.width = window.innerWidth
//   sizes.height = window.innerHeight
//
//   camera.aspect = sizes.width / sizes.height
//   camera.updateProjectionMatrix()
//
//   renderer.setSize(sizes.width, sizes.height)
// })

/**
 * pixel ratio
 *
 * many phones and modern screens have devicePixelRatio > 1
 * meaning more physical pixels than css pixels
 *
 * setting pixel ratio improves sharpness
 * but a very high value can hurt performance
 * so we usually clamp it
 */

// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * summary
 *
 * camera aspect must match the canvas
 * renderer size must match the canvas
 * pixel ratio makes it crisp
 */
