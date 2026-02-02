import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(12, 12))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(0, 2, 5)
camera.lookAt(0, 0.5, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.6))
const dir = new THREE.DirectionalLight(0xffffff, 1.2)
dir.position.set(3, 4, 2)
scene.add(dir)

// custom geometry: a quad made from two triangles
const geometry = new THREE.BufferGeometry()

const positions = new Float32Array([
  -1.2, 0, 0,
  0, 1.6, 0,
  1.2, 0, 0,

  -1.2, 0, 0,
  1.2, 0, 0,
  0, -1.2, 0
])

const colors = new Float32Array([
  1, 0.2, 0.2,
  0.2, 1, 0.2,
  0.2, 0.2, 1,

  1, 0.2, 0.2,
  0.2, 0.2, 1,
  1, 1, 0.2
])

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
geometry.computeVertexNormals()

const material = new THREE.MeshStandardMaterial({
  vertexColors: true,
  side: THREE.DoubleSide
})

const mesh = new THREE.Mesh(geometry, material)
mesh.position.y = 0.4
scene.add(mesh)

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
  mesh.rotation.y = t * 0.6
  mesh.rotation.x = t * 0.3

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
