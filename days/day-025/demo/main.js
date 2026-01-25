import * as THREE from 'three'

const canvas = document.querySelector('#webgl')
const pauseBtn = document.querySelector('#pause')
const statsEl = document.querySelector('#stats')

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

const geo = new THREE.BoxGeometry(1, 1, 1)

const dtMesh = new THREE.Mesh(
  geo,
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
)
dtMesh.position.set(-2.5, 0.5, 0)
scene.add(dtMesh)

const frameMesh = new THREE.Mesh(
  geo,
  new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.35 })
)
frameMesh.position.set(2.5, 0.5, 0)
scene.add(frameMesh)

const speed = 2.0 // units per second
const perFrameStep = 0.03 // units per frame (bad example)

let paused = false
pauseBtn.addEventListener('click', () => {
  paused = !paused
  pauseBtn.textContent = paused ? 'Resume' : 'Pause'
})

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

let previous = performance.now()

function tick(now) {
  const dt = Math.min((now - previous) / 1000, 0.05) // clamp to avoid huge jumps
  previous = now

  if (!paused) {
    // good: time-based
    dtMesh.position.x += speed * dt

    // bad: frame-based
    frameMesh.position.x += perFrameStep

    // wrap around
    if (dtMesh.position.x > 5) dtMesh.position.x = -5
    if (frameMesh.position.x > 5) frameMesh.position.x = -5

    dtMesh.rotation.y += 0.8 * dt
    frameMesh.rotation.y += 0.03
  }

  statsEl.textContent = `dt: ${dt.toFixed(4)}s | fps ~ ${(1 / dt).toFixed(0)} (clamped)`

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

window.requestAnimationFrame(tick)
