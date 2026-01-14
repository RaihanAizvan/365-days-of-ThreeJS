import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// scene
const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(1.5))
scene.add(new THREE.GridHelper(10, 10))

// camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100)
camera.position.set(4, 3, 6)
camera.lookAt(0, 0.5, 0)
scene.add(camera)

// renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)

// lights
scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const dir = new THREE.DirectionalLight(0xffffff, 1.2)
dir.position.set(3, 5, 4)
scene.add(dir)

// --- reuse one material for all meshes ---
const material = new THREE.MeshStandardMaterial({
  color: 0x4aa3ff,
  roughness: 0.4,
  metalness: 0.1
})

// --- create multiple meshes with different geometries ---
const geometries = [
  { geo: new THREE.BoxGeometry(0.8, 0.8, 0.8), name: 'Box' },
  { geo: new THREE.SphereGeometry(0.5, 32, 32), name: 'Sphere' },
  { geo: new THREE.CylinderGeometry(0.4, 0.4, 1, 32), name: 'Cylinder' },
  { geo: new THREE.TorusGeometry(0.4, 0.15, 16, 64), name: 'Torus' },
  { geo: new THREE.ConeGeometry(0.5, 1, 32), name: 'Cone' }
]

const meshes = []
const spacing = 1.8
const startX = -(geometries.length - 1) * spacing / 2

for (let i = 0; i < geometries.length; i++) {
  const mesh = new THREE.Mesh(geometries[i].geo, material)
  mesh.position.set(startX + i * spacing, 0.6, 0)
  mesh.name = geometries[i].name
  scene.add(mesh)
  meshes.push(mesh)
}

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
