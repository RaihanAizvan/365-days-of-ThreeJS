import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const pixelRatioCapEl = document.querySelector('#pixelRatioCap')
const toneMappingEl = document.querySelector('#toneMapping')
const exposureEl = document.querySelector('#exposure')
const exposureValueEl = document.querySelector('#exposureValue')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// scene
const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(12, 12))
scene.add(new THREE.AxesHelper(1.5))

// camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 50)
camera.position.set(4, 2.5, 6)
camera.lookAt(0, 0.8, 0)
scene.add(camera)

// renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setClearColor(0x0f0f12, 1)

// modern defaults for most projects
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1

// lights: push intensity a bit so tone mapping/exposure are visible
scene.add(new THREE.AmbientLight(0xffffff, 0.2))
const dir = new THREE.DirectionalLight(0xffffff, 5)
dir.position.set(3, 5, 4)
scene.add(dir)

// objects
const material = new THREE.MeshStandardMaterial({
  color: 0x4aa3ff,
  roughness: 0.35,
  metalness: 0.1
})

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), material)
sphere.position.set(-1.2, 0.7, 0)
scene.add(sphere)

const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material)
box.position.set(1.2, 0.5, 0)
scene.add(box)

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: 0x202028, roughness: 1, metalness: 0 })
)
plane.rotation.x = -Math.PI / 2
scene.add(plane)

function applyRendererSettings() {
  const cap = Number(pixelRatioCapEl.value)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, cap))

  const tm = toneMappingEl.value
  if (tm === 'none') renderer.toneMapping = THREE.NoToneMapping
  if (tm === 'aces') renderer.toneMapping = THREE.ACESFilmicToneMapping
  if (tm === 'reinhard') renderer.toneMapping = THREE.ReinhardToneMapping
  if (tm === 'cineon') renderer.toneMapping = THREE.CineonToneMapping

  renderer.toneMappingExposure = Number(exposureEl.value)
  exposureValueEl.innerHTML = `<code>${renderer.toneMappingExposure.toFixed(2)}</code>`

  console.log('renderer config:', {
    devicePixelRatio: window.devicePixelRatio,
    pixelRatioCap: cap,
    rendererPixelRatio: renderer.getPixelRatio(),
    toneMapping: tm,
    exposure: renderer.toneMappingExposure
  })
}

pixelRatioCapEl.addEventListener('change', applyRendererSettings)
toneMappingEl.addEventListener('change', applyRendererSettings)
exposureEl.addEventListener('input', applyRendererSettings)

applyRendererSettings()

// resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  applyRendererSettings()
})

// animate
const clock = new THREE.Clock()
let lastInfoLog = 0

function tick() {
  const t = clock.getElapsedTime()

  sphere.rotation.y = t * 0.4
  box.rotation.x = t * 0.4
  box.rotation.y = t * 0.6

  renderer.render(scene, camera)

  // log occasionally
  if (t - lastInfoLog > 2) {
    lastInfoLog = t
    console.log('renderer.info:', renderer.info)
  }

  window.requestAnimationFrame(tick)
}

tick()
