import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(18, 18))
scene.add(new THREE.AxesHelper(1.5))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(9, 5, 11)
camera.lookAt(0, 1, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const dir = new THREE.DirectionalLight(0xffffff, 1.4)
dir.position.set(4, 7, 4)
scene.add(dir)

// shared geometry/materials
const boxGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8)
const matBlue = new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
const matGreen = new THREE.MeshStandardMaterial({ color: 0x44ff99, roughness: 0.35 })
const matYellow = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.35 })

/**
 * 1) Pivot group orbit
 */
const pivot = new THREE.Group()
pivot.position.set(-6, 0, 0)
pivot.name = 'pivot'
scene.add(pivot)

const orbiting = new THREE.Mesh(boxGeo, matBlue)
orbiting.position.set(2.2, 0.4, 0)
orbiting.name = 'orbitingCube'
pivot.add(orbiting)
orbiting.add(new THREE.AxesHelper(1.2))

/**
 * 2) Separate transforms (mover vs visual)
 */
const mover = new THREE.Group()
mover.position.set(0, 0, 0)
mover.name = 'mover'
scene.add(mover)

const visual = new THREE.Mesh(boxGeo, matGreen)
visual.position.y = 0.4
visual.name = 'visual'
mover.add(visual)

// child marker should not be affected by visual scale
const childMarker = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), matYellow)
childMarker.position.set(1.6, 0.25, 0)
childMarker.name = 'childMarker'
mover.add(childMarker)

mover.add(new THREE.AxesHelper(1.2))

/**
 * 3) Prefab factory
 */
function createTotem(color, x) {
  const group = new THREE.Group()
  group.position.set(x, 0, 0)

  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.35 })

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 0.4, 24), mat)
  base.position.y = 0.2
  group.add(base)

  const mid = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), mat)
  mid.position.y = 0.85
  group.add(mid)

  const top = new THREE.Mesh(new THREE.SphereGeometry(0.38, 24, 24), mat)
  top.position.y = 1.5
  group.add(top)

  group.add(new THREE.AxesHelper(1.2))

  return group
}

const totem = createTotem(0xff6b6b, 6)
totem.name = 'totem'
scene.add(totem)

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
let lastLog = 0

function tick() {
  const t = clock.getElapsedTime()

  // pivot orbit
  pivot.rotation.y = t * 0.6
  orbiting.rotation.y = t * 1.2

  // mover motion
  mover.position.z = Math.sin(t * 0.7) * 1.0
  mover.rotation.y = t * 0.4

  // scale only the visual mesh
  const s = 0.6 + (Math.sin(t * 1.3) * 0.25 + 0.25)
  visual.scale.set(s, s, s)

  // prefab rotation
  totem.rotation.y = -t * 0.35

  // demonstrate that child marker spacing does not change
  if (t - lastLog > 1.2) {
    lastLog = t
    const world = new THREE.Vector3()
    childMarker.getWorldPosition(world)
    console.log('[childMarker] world position:', world.toArray(), 'visual.scale:', visual.scale.toArray())
  }

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
