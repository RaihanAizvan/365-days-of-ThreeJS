import * as THREE from 'three'

/**
 * day 62 - texture color space demo
 * 
 * compares sRGB vs linear color textures
 */

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x1a1a1a)

// camera
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
camera.position.set(0, 2, 6)

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.0
document.body.appendChild(renderer.domElement)

// lights (for PBR)
const ambient = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambient)

const directional = new THREE.DirectionalLight(0xffffff, 1)
directional.position.set(5, 5, 5)
scene.add(directional)

// texture loader
const loader = new THREE.TextureLoader()
const texture = loader.load('https://threejs.org/examples/textures/uv_grid_opengl.jpg')

// sRGB texture (correct)
const srgbTexture = texture.clone()
srgbTexture.colorSpace = THREE.SRGBColorSpace

// linear texture (incorrect for color textures)
const linearTexture = texture.clone()
linearTexture.colorSpace = THREE.LinearSRGBColorSpace

// geometry
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)

// material using sRGB texture
const srgbMaterial = new THREE.MeshStandardMaterial({
  map: srgbTexture,
  roughness: 0.4,
  metalness: 0.0
})

// material using linear texture
const linearMaterial = new THREE.MeshStandardMaterial({
  map: linearTexture,
  roughness: 0.4,
  metalness: 0.0
})

const leftBox = new THREE.Mesh(geometry, srgbMaterial)
leftBox.position.x = -2
scene.add(leftBox)

const rightBox = new THREE.Mesh(geometry, linearMaterial)
rightBox.position.x = 2
scene.add(rightBox)

// animation
function animate() {
  requestAnimationFrame(animate)

  const time = Date.now() * 0.001
  leftBox.rotation.y = time
  rightBox.rotation.y = time

  renderer.render(scene, camera)
}

animate()

// resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
