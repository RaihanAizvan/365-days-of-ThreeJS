import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

// sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// scene
const scene = new THREE.Scene()

// helpers to keep orientation clear
scene.add(new THREE.AxesHelper(1.5))
scene.add(new THREE.GridHelper(10, 10))

// camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100)
camera.position.set(3, 2, 5)
camera.lookAt(0, 0.5, 0)
scene.add(camera)

// renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)

// lights (just enough to see shading)
scene.add(new THREE.AmbientLight(0xffffff, 0.6))
const dir = new THREE.DirectionalLight(0xffffff, 1)
dir.position.set(2, 4, 3)
scene.add(dir)

// --- a "car" group made of multiple meshes ---
function createCar() {
  const car = new THREE.Group()
  car.name = 'car'

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.5, 0.9),
    new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.4 })
  )
  body.position.y = 0.45
  body.name = 'body'
  car.add(body)

  const wheelGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.18, 24)
  wheelGeo.rotateZ(Math.PI / 2)
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 })

  function wheel(name, x, y, z) {
    const w = new THREE.Mesh(wheelGeo, wheelMat)
    w.name = name
    w.position.set(x, y, z)
    car.add(w)
    return w
  }

  const wFL = wheel('wheelFL', 0.6, 0.22, 0.45)
  const wFR = wheel('wheelFR', 0.6, 0.22, -0.45)
  const wBL = wheel('wheelBL', -0.6, 0.22, 0.45)
  const wBR = wheel('wheelBR', -0.6, 0.22, -0.45)

  return { car, wheels: [wFL, wFR, wBL, wBR] }
}

const { car, wheels } = createCar()
scene.add(car)

// a separate object in the scene (not parented to the car)
const marker = new THREE.Mesh(
  new THREE.SphereGeometry(0.08, 16, 16),
  new THREE.MeshStandardMaterial({ color: 0xffcc00 })
)
marker.position.set(0, 0.08, 0)
marker.name = 'originMarker'
scene.add(marker)

// resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// animate
const clock = new THREE.Clock()
let lastLog = 0

function tick() {
  const t = clock.getElapsedTime()

  // moving the parent moves all children
  car.position.x = Math.sin(t) * 1.2
  car.rotation.y = t * 0.6

  // local wheel rotation (relative to the parent)
  for (const w of wheels) {
    w.rotation.x = t * 3.0
  }

  // show local vs world space (log ~2x/sec)
  if (t - lastLog > 0.5) {
    lastLog = t
    const wheel = wheels[0]
    const world = new THREE.Vector3()
    wheel.getWorldPosition(world)

    console.log('[wheelFL] local:', wheel.position.toArray(), 'world:', world.toArray())
  }

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
