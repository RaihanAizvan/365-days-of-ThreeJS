import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const orderEl = document.querySelector('#order')
const pitchEl = document.querySelector('#pitch')
const yawEl = document.querySelector('#yaw')
const rollEl = document.querySelector('#roll')

const pitchVal = document.querySelector('#pitchVal')
const yawVal = document.querySelector('#yawVal')
const rollVal = document.querySelector('#rollVal')

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

const eulerMesh = new THREE.Mesh(
  geo,
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
)
eulerMesh.position.set(-2.5, 0.5, 0)
eulerMesh.add(new THREE.AxesHelper(1.6))
scene.add(eulerMesh)

const quatMesh = new THREE.Mesh(
  geo,
  new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.35 })
)
quatMesh.position.set(2.5, 0.5, 0)
quatMesh.add(new THREE.AxesHelper(1.6))
scene.add(quatMesh)

function degToRad(d) {
  return (d * Math.PI) / 180
}

function updateUI() {
  pitchVal.innerHTML = `<code>${pitchEl.value}°</code>`
  yawVal.innerHTML = `<code>${yawEl.value}°</code>`
  rollVal.innerHTML = `<code>${rollEl.value}°</code>`
}

function applyRotation() {
  updateUI()

  const order = orderEl.value
  const pitch = degToRad(Number(pitchEl.value))
  const yaw = degToRad(Number(yawEl.value))
  const roll = degToRad(Number(rollEl.value))

  // Euler mesh: set euler directly
  eulerMesh.rotation.order = order
  eulerMesh.rotation.set(pitch, yaw, roll)

  // Quaternion mesh: build a quaternion from the same Euler
  // This still represents the same final orientation, but stores it as a quaternion.
  const e = new THREE.Euler(pitch, yaw, roll, order)
  quatMesh.quaternion.setFromEuler(e)
}

orderEl.addEventListener('change', applyRotation)
pitchEl.addEventListener('input', applyRotation)
yawEl.addEventListener('input', applyRotation)
rollEl.addEventListener('input', applyRotation)

applyRotation()

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

function tick() {
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
