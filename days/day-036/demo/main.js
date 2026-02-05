import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(16, 16))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(8, 6, 10)
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

const boxes = [
  { geo: new THREE.BoxGeometry(1.6, 1.6, 1.6, 1, 1, 1), label: '1 seg' },
  { geo: new THREE.BoxGeometry(1.6, 1.6, 1.6, 4, 4, 4), label: '4 seg' },
  { geo: new THREE.BoxGeometry(1.6, 1.6, 1.6, 10, 10, 10), label: '10 seg' }
]

const meshes = []
const spacing = 3
const startX = -(boxes.length - 1) * spacing / 2

for (let i = 0; i < boxes.length; i++) {
  const mesh = new THREE.Mesh(boxes[i].geo, material)
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
    mesh.rotation.x = t * 0.4
    mesh.rotation.y = t * 0.6
  }

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
