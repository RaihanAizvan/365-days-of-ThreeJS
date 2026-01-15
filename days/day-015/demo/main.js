import * as THREE from 'three'

const canvas = document.querySelector('#webgl')
const modeEl = document.querySelector('#mode')
const toggleBtn = document.querySelector('#toggle')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// scene
const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(12, 12))
scene.add(new THREE.AxesHelper(1.5))

// renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)

// lights
scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const dir = new THREE.DirectionalLight(0xffffff, 1.2)
dir.position.set(3, 5, 4)
scene.add(dir)

// objects: same size cubes at different distances
const geo = new THREE.BoxGeometry(0.6, 0.6, 0.6)
const matNear = new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
const matMid = new THREE.MeshStandardMaterial({ color: 0x44ff99, roughness: 0.35 })
const matFar = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.35 })

const cubeNear = new THREE.Mesh(geo, matNear)
cubeNear.position.set(-1.2, 0.3, 0)
scene.add(cubeNear)

const cubeMid = new THREE.Mesh(geo, matMid)
cubeMid.position.set(0, 0.3, -3)
scene.add(cubeMid)

const cubeFar = new THREE.Mesh(geo, matFar)
cubeFar.position.set(1.2, 0.3, -6)
scene.add(cubeFar)

// camera setup
const perspectiveCamera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100)
perspectiveCamera.position.set(3.5, 2.2, 5)
perspectiveCamera.lookAt(0, 0.4, -3)

function makeOrthoCamera() {
  // Choose a "view size" in world units.
  // Bigger => sees more world, objects look smaller.
  const viewHeight = 4.5
  const aspect = sizes.width / sizes.height
  const viewWidth = viewHeight * aspect

  const left = -viewWidth / 2
  const right = viewWidth / 2
  const top = viewHeight / 2
  const bottom = -viewHeight / 2

  const cam = new THREE.OrthographicCamera(left, right, top, bottom, 0.1, 100)
  cam.position.copy(perspectiveCamera.position)
  cam.lookAt(0, 0.4, -3)
  return cam
}

let orthoCamera = makeOrthoCamera()

let activeCamera = perspectiveCamera
let isPerspective = true

function setModeText() {
  modeEl.textContent = `Mode: ${isPerspective ? 'PerspectiveCamera' : 'OrthographicCamera'}`
}
setModeText()

toggleBtn.addEventListener('click', () => {
  isPerspective = !isPerspective
  activeCamera = isPerspective ? perspectiveCamera : orthoCamera
  setModeText()
})

// resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // perspective
  perspectiveCamera.aspect = sizes.width / sizes.height
  perspectiveCamera.updateProjectionMatrix()

  // orthographic (recompute frustum)
  orthoCamera = makeOrthoCamera()
  if (!isPerspective) activeCamera = orthoCamera

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// animate
const clock = new THREE.Clock()

function tick() {
  const t = clock.getElapsedTime()

  // small camera orbit so the difference is easier to notice
  const radius = 6
  const angle = t * 0.25
  const x = Math.cos(angle) * radius
  const z = Math.sin(angle) * radius

  perspectiveCamera.position.set(x, 2.2, z)
  perspectiveCamera.lookAt(0, 0.4, -3)

  // keep ortho camera aligned with perspective camera
  orthoCamera.position.copy(perspectiveCamera.position)
  orthoCamera.lookAt(0, 0.4, -3)

  renderer.render(scene, activeCamera)
  window.requestAnimationFrame(tick)
}

tick()
