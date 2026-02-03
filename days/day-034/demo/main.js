import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(16, 16))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(10, 6, 12)
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

const material = new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.4 })

// primitive shapes
const shapes = [
  { geo: new THREE.BoxGeometry(1, 1, 1), name: 'Box' },
  { geo: new THREE.SphereGeometry(0.6, 32, 32), name: 'Sphere' },
  { geo: new THREE.CylinderGeometry(0.5, 0.5, 1.2, 32), name: 'Cylinder' },
  { geo: new THREE.ConeGeometry(0.6, 1.2, 32), name: 'Cone' },
  { geo: new THREE.TorusGeometry(0.5, 0.2, 16, 48), name: 'Torus' },
  { geo: new THREE.PlaneGeometry(1.2, 1.2, 1, 1), name: 'Plane' },
  { geo: new THREE.RingGeometry(0.3, 0.6, 32), name: 'Ring' }
]

const meshes = []
const spacing = 2.2
const startX = -(shapes.length - 1) * spacing / 2

for (let i = 0; i < shapes.length; i++) {
  const mesh = new THREE.Mesh(shapes[i].geo, material)
  mesh.position.set(startX + i * spacing, 1, 0)
  mesh.name = shapes[i].name
  scene.add(mesh)
  meshes.push(mesh)
}

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
  const t = clock.getElapsedTime()

  for (const mesh of meshes) {
    mesh.rotation.x = t * 0.5
    mesh.rotation.y = t * 0.7
  }

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
