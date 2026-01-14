/**
 * day 14 - basic mesh
 *
 * key idea: Mesh = Geometry + Material
 */

/**
 * what is a mesh?
 *
 * a Mesh is a renderable Object3D that represents a 3d object.
 *
 * it has:
 * - geometry (the shape)
 * - material (the appearance)
 * - transform (position/rotation/scale from Object3D)
 */

/**
 * geometry: the shape
 *
 * BufferGeometry holds vertex attributes as typed arrays:
 * - position (xyz per vertex)
 * - normal (lighting direction)
 * - uv (texture coordinates)
 * - index (optional, for sharing vertices)
 *
 * three js provides many built-in geometries:
 * - BoxGeometry
 * - SphereGeometry
 * - PlaneGeometry
 * - CylinderGeometry
 * - TorusGeometry
 * - ...
 */

/**
 * material: the appearance
 *
 * material defines how surfaces react to lights and the camera.
 *
 * common materials:
 * - MeshBasicMaterial (no lighting, flat color)
 * - MeshStandardMaterial (pbr shading, roughness/metalness)
 * - MeshPhongMaterial (older shading model, specular highlights)
 *
 * materials can have:
 * - color
 * - texture maps
 * - wireframe mode
 * - transparency (opacity, alphaTest)
 */

/**
 * creating a mesh
 */

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshStandardMaterial({ color: 0x4aa3ff })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

/**
 * reusing geometry/material
 *
 * performance best practice:
 * - create geometry once
 * - create material once
 * - reuse for multiple meshes
 */

// const sharedGeometry = new THREE.BoxGeometry(1, 1, 1)
// const sharedMaterial = new THREE.MeshStandardMaterial({ color: 0x44ff44 })
//
// for (let i = 0; i < 100; i++) {
//   const mesh = new THREE.Mesh(sharedGeometry, sharedMaterial)
//   mesh.position.set(...)
//   scene.add(mesh)
// }

/**
 * disposing
 *
 * when you are done with a geometry or material, dispose it:
 * - geometry.dispose()
 * - material.dispose()
 *
 * this releases GPU resources.
 */
