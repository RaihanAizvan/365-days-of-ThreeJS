import * as THREE from 'three'

/**
 * day 54 - clamp-to-edge wrapping demo
 * 
 * compare clamp-to-edge with repeat and mirror wrapping
 */

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x1a1a1a)

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
camera.position.z = 5

// renderer
const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// texture loader
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('./textures/checker.png')

// create three planes with different wrapping modes
const geometry = new THREE.PlaneGeometry(2, 2)

// clamp-to-edge (left)
const clampTexture = texture.clone()
clampTexture.needsUpdate = true
clampTexture.wrapS = THREE.ClampToEdgeWrapping
clampTexture.wrapT = THREE.ClampToEdgeWrapping
clampTexture.repeat.set(2, 2) // repeat to show effect

const clampMaterial = new THREE.MeshBasicMaterial({ map: clampTexture })
const clampPlane = new THREE.Mesh(geometry, clampMaterial)
clampPlane.position.x = -2.5
scene.add(clampPlane)

// repeat wrapping (center)
const repeatTexture = texture.clone()
repeatTexture.needsUpdate = true
repeatTexture.wrapS = THREE.RepeatWrapping
repeatTexture.wrapT = THREE.RepeatWrapping
repeatTexture.repeat.set(2, 2)

const repeatMaterial = new THREE.MeshBasicMaterial({ map: repeatTexture })
const repeatPlane = new THREE.Mesh(geometry, repeatMaterial)
repeatPlane.position.x = 0
scene.add(repeatPlane)

// mirror wrapping (right)
const mirrorTexture = texture.clone()
mirrorTexture.needsUpdate = true
mirrorTexture.wrapS = THREE.MirroredRepeatWrapping
mirrorTexture.wrapT = THREE.MirroredRepeatWrapping
mirrorTexture.repeat.set(2, 2)

const mirrorMaterial = new THREE.MeshBasicMaterial({ map: mirrorTexture })
const mirrorPlane = new THREE.Mesh(geometry, mirrorMaterial)
mirrorPlane.position.x = 2.5
scene.add(mirrorPlane)

// labels (using CSS2DRenderer would be better, but keeping it simple)
console.log('Left: ClampToEdge | Center: Repeat | Right: Mirror')

// animation loop
function animate() {
  requestAnimationFrame(animate)
  
  // slowly rotate all planes to show wrapping behavior
  const time = Date.now() * 0.0001
  clampPlane.rotation.z = time
  repeatPlane.rotation.z = time
  mirrorPlane.rotation.z = time
  
  renderer.render(scene, camera)
}

animate()

// resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
