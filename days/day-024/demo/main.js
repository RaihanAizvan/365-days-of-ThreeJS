import * as THREE from 'three'

const canvas = document.querySelector('#webgl')
const moveBtn = document.querySelector('#move')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(14, 14))
scene.add(new THREE.AxesHelper(1.5))

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
const dirLight = new THREE.DirectionalLight(0xffffff, 1.3)
dirLight.position.set(4, 6, 3)
scene.add(dirLight)

// parent group with motion
const parent = new THREE.Group()
parent.name = 'parent'
scene.add(parent)
parent.add(new THREE.AxesHelper(2.0))

const parentMesh = new THREE.Mesh(
  new THREE.BoxGeometry(1.4, 0.3, 1.4),
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.4 })
)
parentMesh.position.y = 0.15
parent.add(parentMesh)

const child = new THREE.Mesh(
  new THREE.SphereGeometry(0.18, 16, 16),
  new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.35 })
)
child.name = 'child'
child.position.set(2, 0.6, 0) // local
parent.add(child)

// visualize the target world point
const targetWorld = new THREE.Vector3(2, 0.6, -2)
const targetMarker = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 16, 16),
  new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.4 })
)
targetMarker.position.copy(targetWorld)
targetMarker.name = 'targetWorldMarker'
scene.add(targetMarker)

function setChildWorldPosition(worldPos) {
  // Ensure matrices are up-to-date before converting.
  parent.updateMatrixWorld(true)

  const local = worldPos.clone()
  parent.worldToLocal(local)

  console.log('setting child world position', worldPos.toArray(), '=> local', local.toArray())
  child.position.copy(local)
}

moveBtn.addEventListener('click', () => {
  setChildWorldPosition(targetWorld)
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
let lastLog = 0

function tick() {
  const t = clock.getElapsedTime()

  parent.position.x = Math.cos(t * 0.45) * 1.2
  parent.position.z = Math.sin(t * 0.45) * 1.2
  parent.rotation.y = t * 0.8

  if (t - lastLog > 1.2) {
    lastLog = t
    const world = new THREE.Vector3()
    child.getWorldPosition(world)

    const dir = new THREE.Vector3()
    child.getWorldDirection(dir)

    console.log('[child] world position:', world.toArray(), 'world direction (-Z):', dir.toArray())
  }

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
