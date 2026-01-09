/**
 * day 9 - webgl context
 *
 * webgl is the browser api that talks to the gpu.
 *
 * the "webgl context" is the object you get from a canvas
 * that contains all the functions and state to issue gpu commands.
 *
 * three js wraps this, but it still relies on the same concept.
 */

/**
 * canvas vs context
 *
 * canvas is just a drawing surface (an html element)
 * context is the drawing api you attach to that surface
 *
 * 2d canvas:
 *   canvas.getContext('2d')
 * webgl:
 *   canvas.getContext('webgl') or canvas.getContext('webgl2')
 */

// const canvas = document.querySelector('canvas')
// const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')

/**
 * what you do with a webgl context
 *
 * the context exposes functions like:
 * - gl.clearColor(r, g, b, a)
 * - gl.clear(gl.COLOR_BUFFER_BIT)
 * - gl.createBuffer(), gl.bindBuffer(), gl.bufferData()
 * - gl.createShader(), gl.shaderSource(), gl.compileShader()
 * - gl.drawArrays() / gl.drawElements()
 *
 * important idea:
 * webgl is a state machine.
 * you set state (which program, which buffers, which textures)
 * then you issue a draw call.
 */

/**
 * minimal mental model (not runnable)
 */
// gl.viewport(0, 0, canvas.width, canvas.height)
// gl.clearColor(0.1, 0.1, 0.1, 1.0)
// gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
// gl.drawArrays(gl.TRIANGLES, 0, 3)

/**
 * why we need a context at all
 *
 * javascript cannot directly talk to the gpu.
 * the context is the browser-managed bridge.
 */

/**
 * context attributes
 *
 * when you request a context, you can ask for options.
 * examples:
 * - alpha: does the canvas have transparency
 * - antialias: smooth edges (multi-sampling)
 * - depth: enable depth buffer for 3d occlusion
 */

// const gl = canvas.getContext('webgl', {
//   alpha: true,
//   antialias: true,
//   depth: true
// })

/**
 * context loss
 *
 * the browser can lose the gpu context (driver reset, tab suspended, memory pressure).
 * when that happens, all gpu resources are gone (textures, buffers, programs).
 *
 * you can listen to events:
 * - webglcontextlost
 * - webglcontextrestored
 *
 * three js has internal handling but it is good to know this exists.
 */

// canvas.addEventListener('webglcontextlost', (event) => {
//   event.preventDefault()
//   // pause rendering, show message, etc
// })
//
// canvas.addEventListener('webglcontextrestored', () => {
//   // recreate gpu resources, restart loop
// })

/**
 * how this connects to three js
 *
 * you usually do not call canvas.getContext yourself.
 * you create a renderer:
 *   new THREE.WebGLRenderer({ canvas })
 *
 * the renderer creates (or uses) the webgl context internally.
 * it then translates your scene + camera into webgl calls.
 */

/**
 * one more key idea: "gpu memory" vs "js memory"
 *
 * geometry attributes and textures live on the gpu.
 * in three js you often need to dispose them manually:
 * - geometry.dispose()
 * - material.dispose()
 * - texture.dispose()
 *
 * otherwise you can leak gpu memory even if js objects are garbage collected.
 */
