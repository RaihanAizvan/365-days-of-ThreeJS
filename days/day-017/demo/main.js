import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(12, 12))
scene.add(new THREE.AxesHelper(1.5))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 50)
camera.position.set(5, 3, 6)
camera.lookAt(0, 0.8, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.6))
const dir = new THREE.DirectionalLight(0xffffff, 1.2)
dir.position.set(3, 5, 4)
scene.add(dir)

// parent group (moves around)
const parent = new THREE.Group()
parent.name = 'parent'
scene.add(parent)

// parent visual
const parentMesh = new THREE.Mesh(
  new THREE.BoxGeometry(0.6, 0.6, 0.6),
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.4 })
)
parentMesh.position.y = 0.3
parent.add(parentMesh)

// child mesh (local translateZ demo)
const child = new THREE.Mesh(
  new THREE.ConeGeometry(0.25, 0.7, 24),
  new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.4 })
)
child.name = 'child'
child.position.set(0, 0.8, 0)
parent.add(child)

// point the cone forward (-Z) so translateZ feels intuitive
child.rotation.x = Math.PI / 2

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

  // move parent around world origin
  parent.position.x = Math.cos(t * 0.6) * 2
  parent.position.z = Math.sin(t * 0.6) * 2
  parent.rotation.y = t * 0.9

  // child local movement: forward/back in its local axis
  // (because we rotate it, its local axis changes)
  child.position.set(0, 0.8, 0)
  child.translateZ(Math.sin(t * 2) * 0.8)

  // log local vs world
  if (t - lastLog > 0.75) {
    lastLog = t
    const world = new THREE.Vector3()
    child.getWorldPosition(world)
    console.log('[child] local position:', child.position.toArray(), 'world position:', world.toArray())
  }

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
