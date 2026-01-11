/**
 * day 11 - three js abstraction
 *
 * think of three js as a translator:
 * - you describe a world using objects (Scene, Mesh, Light)
 * - three js converts that description into efficient webgl calls
 */

/**
 * layers (top -> bottom)
 *
 * 1) your intent
 *    - "a cube here, a light there, a camera here"
 *
 * 2) scene graph
 *    - Object3D hierarchy (position/rotation/scale)
 *    - parent transforms affect children
 *
 * 3) renderable description
 *    - Mesh = Geometry + Material
 *    - geometry provides vertex attributes
 *    - material describes how to shade
 *
 * 4) renderer implementation
 *    - takes visible objects and prepares gpu state
 *    - sorts, batches (sometimes), caches programs
 *
 * 5) webgl context
 *    - the real api that binds buffers/textures and issues draw calls
 */

/**
 * geometry: "data" vs "gpu"
 *
 * in three js geometry lives as JS objects (BufferGeometry)
 * but gets uploaded to GPU buffers.
 *
 * mental model:
 * - BufferGeometry attributes (position/normal/uv) -> GPU buffers
 * - Index buffer (optional) -> GPU element array buffer
 */

/**
 * material: "parameters" -> shader program
 *
 * materials are convenient presets.
 * internally, three js picks/builds shader code based on:
 * - material type (MeshStandardMaterial, MeshBasicMaterial, ...)
 * - lights in the scene
 * - defines (fog, skinning, instancing, etc)
 *
 * result: a compiled GPU program (vertex shader + fragment shader)
 */

/**
 * uniforms and attributes
 *
 * - attributes: per-vertex data (positions, normals)
 * - uniforms: per-draw-call data (matrices, colors, time)
 *
 * three js updates common uniforms automatically:
 * - modelMatrix, viewMatrix, projectionMatrix
 * - normalMatrix
 */

/**
 * renderer responsibilities you don't see
 *
 * - culling: skip objects outside the camera frustum
 * - sorting:
 *   - opaque first (depth write on)
 *   - transparent after (blending, depth sort)
 * - state caching: avoid redundant gl calls
 * - resource management: upload buffers, compile shaders, manage textures
 */

/**
 * where performance usually goes
 *
 * cpu side (draw call bound):
 * - too many meshes
 * - too many unique materials (shader variants)
 *
 * gpu side (fill rate / shading bound):
 * - high resolution / high pixel ratio
 * - heavy fragment shading (many lights, postprocessing)
 * - lots of transparency (overdraw)
 */

/**
 * big takeaway
 *
 * three js does not remove the limits of webgl.
 * it packages them into an easier mental model.
 *
 * if you understand the layers, debugging becomes easier:
 * - is the issue in scene graph transforms?
 * - is it geometry/material setup?
 * - is it renderer state/perf?
 */
