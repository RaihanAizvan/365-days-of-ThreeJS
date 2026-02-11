import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

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

scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const dir = new THREE.DirectionalLight(0xffffff, 1.3)
dir.position.set(4, 6, 3)
scene.add(dir)

const baseColor = new THREE.Color('#4aa3ff')
const hoverColor = new THREE.Color('#ffcc00')

const material = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.4 })
const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.4), material)
mesh.position.y = 0.7
scene.add(mesh)

const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

const state = {
  hovered: false,
  pressed: false,
  pressTime: 0
}

window.addEventListener('pointermove', (event) => {
  pointer.x = (event.clientX / sizes.width) * 2 - 1
  pointer.y = -(event.clientY / sizes.height) * 2 + 1
})

window.addEventListener('pointerdown', () => {
  if (state.hovered) {
    state.pressed = true
    state.pressTime = 0
  }
})

window.addEventListener('pointerup', () => {
  state.pressed = false
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
  const t = clock.getElapsedTime()

  // raycast for hover state
  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObject(mesh)
  state.hovered = hits.length > 0

  // color feedback (smooth)
  const targetColor = state.hovered ? hoverColor : baseColor
  material.color.lerp(targetColor, 0.1)

  // press feedback (pulse)
  if (state.pressed) {
    state.pressTime += dt
  }

  const pulse = state.pressed ? Math.sin(state.pressTime * 10) * 0.08 : 0
  const baseScale = 1 + Math.sin(t * 2) * 0.02
  mesh.scale.setScalar(baseScale + pulse)

  mesh.rotation.y = t * 0.4

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
