import * as THREE from 'three'

const canvas = document.querySelector('#webgl')
const statsEl = document.querySelector('#stats')
const pixelRatioEl = document.querySelector('#pixelRatio')

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
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const dir = new THREE.DirectionalLight(0xffffff, 1.3)
dir.position.set(4, 6, 3)
scene.add(dir)

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
)
mesh.position.y = 0.5
scene.add(mesh)

function applySize() {
  renderer.setSize(sizes.width, sizes.height)

  const cap = Number(pixelRatioEl.value)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, cap))

  statsEl.textContent = `size: ${sizes.width}x${sizes.height} | dpr: ${window.devicePixelRatio.toFixed(2)} | renderer: ${renderer.getPixelRatio().toFixed(2)}`
}

pixelRatioEl.addEventListener('change', applySize)

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  applySize()
})

applySize()

const clock = new THREE.Clock()

function tick() {
  const t = clock.getElapsedTime()
  mesh.rotation.y = t * 0.6
  mesh.rotation.x = t * 0.3

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
