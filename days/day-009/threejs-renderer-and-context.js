/**
 * three js renderer and the webgl context
 *
 * three js has multiple renderers, but the default is WebGLRenderer.
 * it owns:
 * - the webgl context (gl)
 * - the drawing buffers
 * - a bunch of internal caches for performance
 */

/**
 * typical setup
 */

// import * as THREE from 'three'
//
// const canvas = document.querySelector('#webgl')
// const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
// renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * renderer.render(scene, camera)
 *
 * mentally, this means:
 * 1) walk the scene graph
 * 2) determine what is visible from the camera
 * 3) build draw calls (shaders, buffers, uniforms)
 * 4) call the underlying webgl api to draw pixels
 */

/**
 * using an existing context (advanced)
 *
 * if you already have a webgl context (gl), three js can use it.
 * this is useful when integrating with other webgl code.
 */

// const gl = canvas.getContext('webgl2')
// const renderer = new THREE.WebGLRenderer({ canvas, context: gl })

/**
 * important: the renderer and you must not fight over state
 *
 * if you do raw gl calls while three js renders, you can break its assumptions.
 * if you need to mix, you typically:
 * - do your gl work before or after renderer.render
 * - reset state (or let three js reset)
 */

/**
 * summary
 *
 * - canvas is the surface
 * - webgl context is the gpu api attached to the surface
 * - three js renderer is a higher level system that uses the context for you
 */
