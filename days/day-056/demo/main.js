import * as THREE from 'three'

/**
 * day 56 - MeshBasicMaterial deep dive demo
 * 
 * demonstrates various MeshBasicMaterial properties
 */

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x1a1a1a)

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 8

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

// add a light (to show that MeshBasicMaterial ignores it)
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(5, 5, 5)
scene.add(light)

// geometry - shared
const geometry = new THREE.SphereGeometry(0.8, 32, 32)

// example 1: solid color
const material1 = new THREE.MeshBasicMaterial({
  color: 0xff6b6b
})
const mesh1 = new THREE.Mesh(geometry, material1)
mesh1.position.x = -4
scene.add(mesh1)

// example 2: wireframe
const material2 = new THREE.MeshBasicMaterial({
  color: 0x4ecdc4,
  wireframe: true
})
const mesh2 = new THREE.Mesh(geometry, material2)
mesh2.position.x = -2
scene.add(mesh2)

// example 3: transparent
const material3 = new THREE.MeshBasicMaterial({
  color: 0xffe66d,
  transparent: true,
  opacity: 0.5
})
const mesh3 = new THREE.Mesh(geometry, material3)
mesh3.position.x = 0
scene.add(mesh3)

// example 4: double-sided
const planeGeometry = new THREE.PlaneGeometry(1.5, 1.5)
const material4 = new THREE.MeshBasicMaterial({
  color: 0xa8dadc,
  side: THREE.DoubleSide
})
const mesh4 = new THREE.Mesh(planeGeometry, material4)
mesh4.position.x = 2
scene.add(mesh4)

// example 5: vertex colors
const boxGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
const colors = new Float32Array([
  1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0, // red face
  0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0, // green face
  0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1, // blue face
  1, 1, 0,  1, 1, 0,  1, 1, 0,  1, 1, 0, // yellow face
  1, 0, 1,  1, 0, 1,  1, 0, 1,  1, 0, 1, // magenta face
  0, 1, 1,  0, 1, 1,  0, 1, 1,  0, 1, 1  // cyan face
])
boxGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
const material5 = new THREE.MeshBasicMaterial({
  vertexColors: true
})
const mesh5 = new THREE.Mesh(boxGeometry, material5)
mesh5.position.x = 4
scene.add(mesh5)

// animation
function animate() {
  requestAnimationFrame(animate)

  const time = Date.now() * 0.001

  // rotate all meshes
  mesh1.rotation.y = time
  mesh2.rotation.y = time
  mesh3.rotation.y = time
  mesh4.rotation.y = time * 0.5
  mesh5.rotation.x = time * 0.5
  mesh5.rotation.y = time * 0.5

  renderer.render(scene, camera)
}

animate()

// handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
