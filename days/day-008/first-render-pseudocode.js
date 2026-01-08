/**
 * minimal first render (pseudocode)
 *
 * this is the smallest three js program structure
 *
 * note:
 * - this file is not wired to an html page in this repo yet
 * - it is here to show the order of operations
 */

// import * as THREE from 'three'

/**
 * 1) create a canvas in html
 *
 * <canvas id="webgl"></canvas>
 */

/**
 * 2) sizes
 *
 * aspect is width / height
 */
const sizes = {
  width: 800,
  height: 600
}

/**
 * 3) scene
 */
// const scene = new THREE.Scene()

/**
 * 4) object (mesh)
 *
 * mesh = geometry + material
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 'red' })
// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

/**
 * 5) camera
 */
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// )
// camera.position.z = 3
// scene.add(camera)

/**
 * 6) renderer
 */
// const canvas = document.querySelector('#webgl')
// const renderer = new THREE.WebGLRenderer({ canvas })
// renderer.setSize(sizes.width, sizes.height)

/**
 * 7) render
 */
// renderer.render(scene, camera)

/**
 * if you do the steps above and see a cube
 * you have the full pipeline working
 */
