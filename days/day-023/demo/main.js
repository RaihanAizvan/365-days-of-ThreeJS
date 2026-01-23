import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

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
const dir = new THREE.DirectionalLight(0xffffff, 1.3)
dir.position.set(4, 6, 3)
scene.add(dir)

// parent group (moves/rotates in world)
const parent = new THREE.Group()
parent.position.set(0, 0, 0)
parent.name = 'parent'
scene.add(parent)

// visualize parent's local axes
parent.add(new THREE.AxesHelper(2.0))

// a visible parent mesh
const parentMesh = new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 0.3, 1.2),
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.4 })
)
parentMesh.position.y = 0.15
parent.add(parentMesh)

// child marker positioned in parent's local space
const child = new THREE.Mesh(
  new THREE.SphereGeometry(0.18, 16, 16),
  new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.35 })
)
child.name = 'child'

// local offset from parent origin
child.position.set(2, 0.6, 0)
parent.add(child)

// a world-space marker at the scene origin
const worldOriginMarker = new THREE.Mesh(
  new THREE.SphereGeometry(0.08, 16, 16),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 })
)
worldOriginMarker.position.set(0, 0.08, 0)
scene.add(worldOriginMarker)

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

  parent.position.x = Math.cos(t * 0.5) * 1.0
  parent.position.z = Math.sin(t * 0.5) * 1.0
  parent.rotation.y = t * 0.8

  if (t - lastLog > 1.0) {
    lastLog = t

    const worldPos = new THREE.Vector3()
    child.getWorldPosition(worldPos)

    console.log('[child] local:', child.position.toArray(), 'world:', worldPos.toArray())

    // extra: demonstrate localToWorld
    const localPoint = new THREE.Vector3(0, 0.6, -2)
    const worldPoint = localPoint.clone()
    parent.localToWorld(worldPoint)
    console.log('[parent] local point', localPoint.toArray(), '=> world point', worldPoint.toArray())
  }

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
