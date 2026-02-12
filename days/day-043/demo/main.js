import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(12, 12))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(0, 3, 6)
camera.lookAt(0, 0.5, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.4))
const dir = new THREE.DirectionalLight(0xffffff, 1.2)
dir.position.set(4, 6, 3)
scene.add(dir)

// texture
const loader = new THREE.TextureLoader()
const texture = loader.load('https://threejs.org/examples/textures/uv_grid_opengl.jpg')
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(2, 2)

const material = new THREE.MeshStandardMaterial({ map: texture })
const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 1.6), material)
mesh.position.y = 0.8
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
