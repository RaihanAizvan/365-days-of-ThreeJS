import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(16, 16))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(8, 5, 10)
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

const spheres = [
  { geo: new THREE.SphereGeometry(1, 8, 6), label: 'low' },
  { geo: new THREE.SphereGeometry(1, 24, 16), label: 'medium' },
  { geo: new THREE.SphereGeometry(1, 64, 32), label: 'high' }
]

const meshes = []
const spacing = 3
const startX = -(spheres.length - 1) * spacing / 2

for (let i = 0; i < spheres.length; i++) {
  const mesh = new THREE.Mesh(spheres[i].geo, material)
  mesh.position.set(startX + i * spacing, 1, 0)
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
    mesh.rotation.y = t * 0.5
    mesh.rotation.x = t * 0.3
  }

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
