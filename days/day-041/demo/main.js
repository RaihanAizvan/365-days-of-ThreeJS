import * as THREE from 'three'

const canvas = document.querySelector('#webgl')
const tInput = document.querySelector('#t')
const tVal = document.querySelector('#tVal')
const mappedVal = document.querySelector('#mappedVal')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(12, 12))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(0, 3, 6)
camera.lookAt(0, 0.5, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.4))
const dir = new THREE.DirectionalLight(0xffffff, 1.2)
dir.position.set(4, 6, 3)
scene.add(dir)

const material = new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.4 })
const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.4), material)
mesh.position.y = 0.7
scene.add(mesh)

const params = {
  t: Number(tInput.value)
}

const lerp = (a, b, t) => a + (b - a) * t
const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

function updateMapping() {
  params.t = clamp(Number(tInput.value), 0, 1)
  tVal.innerHTML = `<code>${params.t.toFixed(2)}</code>`

  // linear map 0..1 -> 0.2..2.5 speed
  const speed = lerp(0.2, 2.5, params.t)

  // exponential mapping for scale (ease-in)
  const exp = Math.pow(params.t, 2)
  const scale = lerp(0.5, 2.2, exp)

  mappedVal.innerHTML = `<code>speed: ${speed.toFixed(2)} | scale: ${scale.toFixed(2)}</code>`

  return { speed, scale }
}

let mapped = updateMapping()

tInput.addEventListener('input', () => {
  mapped = updateMapping()
})

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
  const dt = clock.getDelta()

  mesh.rotation.y += mapped.speed * dt
  mesh.rotation.x += mapped.speed * dt * 0.6
  mesh.scale.setScalar(mapped.scale)

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
