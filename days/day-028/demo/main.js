import * as THREE from 'three'

const canvas = document.querySelector('#webgl')
const statsEl = document.querySelector('#stats')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(14, 14))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(0, 3, 6)
camera.lookAt(0, 0.5, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const dir = new THREE.DirectionalLight(0xffffff, 1.2)
dir.position.set(4, 6, 3)
scene.add(dir)

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
)
cube.position.y = 0.5
scene.add(cube)

// --- input state ---
const input = {
  pointer: { x: 0, y: 0 },
  keys: {}
}

window.addEventListener('pointermove', (event) => {
  input.pointer.x = (event.clientX / sizes.width) * 2 - 1
  input.pointer.y = -(event.clientY / sizes.height) * 2 + 1
})

window.addEventListener('keydown', (event) => {
  input.keys[event.key.toLowerCase()] = true
})

window.addEventListener('keyup', (event) => {
  input.keys[event.key.toLowerCase()] = false
})

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// --- animation loop ---
const clock = new THREE.Clock()
let smoothedX = 0
let smoothedY = 0

function tick() {
  const dt = clock.getDelta()

  // smooth pointer inputs
  smoothedX += (input.pointer.x - smoothedX) * 0.1
  smoothedY += (input.pointer.y - smoothedY) * 0.1

  // steering based on pointer
  cube.rotation.y = smoothedX * 1.2
  cube.rotation.x = smoothedY * 0.6

  // movement based on keys
  const speed = 2.5
  if (input.keys['w']) {
    cube.position.z -= speed * dt
  }
  if (input.keys['s']) {
    cube.position.z += speed * dt
  }

  statsEl.textContent = `pointer: (${input.pointer.x.toFixed(2)}, ${input.pointer.y.toFixed(2)}) | keys: ${JSON.stringify(input.keys)}`

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
