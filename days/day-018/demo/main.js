import * as THREE from 'three'

const canvas = document.querySelector('#webgl')
const toggleMirrorBtn = document.querySelector('#toggleMirror')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(14, 14))
scene.add(new THREE.AxesHelper(1.5))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 60)
camera.position.set(7, 4, 9)
camera.lookAt(0, 1, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.45))
const dir = new THREE.DirectionalLight(0xffffff, 1.4)
dir.position.set(4, 6, 3)
scene.add(dir)

// shared geometry/material
const boxGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7)

const matUniform = new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
const matNonUniform = new THREE.MeshStandardMaterial({ color: 0x44ff99, roughness: 0.35 })

// For mirroring demo: use a single-sided material so culling is visible
const matMirror = new THREE.MeshStandardMaterial({
  color: 0xffcc00,
  roughness: 0.35,
  side: THREE.FrontSide
})

function makeRig(x, label, material) {
  const rig = new THREE.Group()
  rig.position.x = x
  rig.name = label

  // parent mesh
  const parentMesh = new THREE.Mesh(boxGeo, material)
  parentMesh.position.y = 0.35
  parentMesh.name = `${label}-parentMesh`
  rig.add(parentMesh)

  // child marker: a smaller cube offset in local space
  const child = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), material)
  child.position.set(1, 0.35, 0)
  child.name = `${label}-child`
  parentMesh.add(child)

  // add a little axis on the parent mesh so you can see orientation
  parentMesh.add(new THREE.AxesHelper(0.6))

  scene.add(rig)
  return { rig, parentMesh, child }
}

const left = makeRig(-4, 'uniform', matUniform)
const mid = makeRig(0, 'nonUniform', matNonUniform)
const right = makeRig(4, 'mirror', matMirror)

// scaling setups
left.parentMesh.scale.set(1, 1, 1)
mid.parentMesh.scale.set(1.6, 0.7, 1)
right.parentMesh.scale.set(1, 1, 1)

let mirrorOn = false
function applyMirror() {
  mirrorOn = !mirrorOn
  right.parentMesh.scale.x = mirrorOn ? -1 : 1
  console.log('mirror scale.x set to', right.parentMesh.scale.x)
}

toggleMirrorBtn.addEventListener('click', applyMirror)

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

  // animate the left parent scale uniformly
  const s = 0.7 + (Math.sin(t * 1.2) * 0.3 + 0.3) // ~0.7..1.3
  left.parentMesh.scale.set(s, s, s)

  // rotate rigs a bit
  left.rig.rotation.y = t * 0.3
  mid.rig.rotation.y = t * 0.3
  right.rig.rotation.y = t * 0.3

  // log how child world position changes because parent scale changes
  if (t - lastLog > 1.0) {
    lastLog = t

    const world = new THREE.Vector3()
    left.child.getWorldPosition(world)

    console.log('[uniform child] local:', left.child.position.toArray(), 'world:', world.toArray())
  }

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
