/**
 * day 34 - primitive shapes
 */

/**
 * common geometries
 *
 * - BoxGeometry(width, height, depth, [segments])
 * - SphereGeometry(radius, widthSegments, heightSegments)
 * - CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
 * - ConeGeometry(radius, height, radialSegments)
 * - TorusGeometry(radius, tube, radialSegments, tubularSegments)
 * - PlaneGeometry(width, height, widthSegments, heightSegments)
 * - CircleGeometry(radius, segments)
 * - RingGeometry(innerRadius, outerRadius, thetaSegments)
 */

/**
 * segments
 *
 * segments control tessellation (how many triangles).
 * higher segments => smoother curves, but more triangles.
 */

/**
 * reusing geometries
 *
 * create once, use for many meshes.
 */

// const geo = new THREE.BoxGeometry(1, 1, 1)
// for (let i = 0; i < 100; i++) {
//   const mesh = new THREE.Mesh(geo, material)
//   scene.add(mesh)
// }
