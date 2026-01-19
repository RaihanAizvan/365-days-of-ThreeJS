import * as THREE from 'three'

const canvas = document.querySelector('#webgl')
const orderEl = document.querySelector('#order')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(14, 14))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(7, 4, 9)
camera.lookAt(0, 1, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const dir = new THREE.DirectionalLight(0xffffff, 1.3)
dir.position.set(4, 6, 3)
scene.add(dir)

// shared geometry
const geo = new THREE.BoxGeometry(1, 1, 1)

// left: Euler
const eulerMesh = new THREE.Mesh(
  geo,
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
)
eulerMesh.position.set(-2.5, 0.5, 0)
scene.add(eulerMesh)
eulerMesh.add(new THREE.AxesHelper(1.6))

// right: quaternion incremental
const quatMesh = new THREE.Mesh(
  geo,
  new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.35 })
)
quatMesh.position.set(2.5, 0.5, 0)
scene.add(quatMesh)
quatMesh.add(new THREE.AxesHelper(1.6))

// labels (simple sprites would be nicer, but keeping it minimal)
console.log('left = Euler rotation (order selectable), right = quaternion incremental')

function applyOrder() {
  eulerMesh.rotation.order = orderEl.value
}
orderEl.addEventListener('change', applyOrder)
applyOrder()

// resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const clock = new THREE.Clock()

function tick() {
  const t = clock.getElapsedTime()

  // Euler demo: set angles directly (makes order differences obvious)
  eulerMesh.rotation.x = Math.sin(t * 0.9) * 1.2
  eulerMesh.rotation.y = Math.sin(t * 1.1) * 1.2
  eulerMesh.rotation.z = Math.sin(t * 1.3) * 1.2

  // Quaternion demo: rotate incrementally around local axes
  // (this avoids direct euler angle composition)
  const dt = clock.getDelta()
  quatMesh.rotateX(dt * 0.8)
  quatMesh.rotateY(dt * 1.1)
  quatMesh.rotateZ(dt * 0.6)

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
