import * as THREE from 'three'

/**
 * day 61 - shadow map types demo
 * 
 * toggle shadow types with keys:
 * 1 = BasicShadowMap
 * 2 = PCFShadowMap
 * 3 = PCFSoftShadowMap
 * 4 = VSMShadowMap
 */

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x1a1a1a)

// camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
camera.position.set(8, 8, 12)
camera.lookAt(0, 0, 0)

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap

const info = document.createElement('div')
info.style.position = 'absolute'
info.style.top = '10px'
info.style.left = '10px'
info.style.color = '#fff'
info.style.background = 'rgba(0,0,0,0.5)'
info.style.padding = '8px'
info.style.fontSize = '14px'
info.textContent = 'Shadow type: PCFShadowMap (press 1-4 to switch)'
document.body.appendChild(info)

document.body.appendChild(renderer.domElement)

// ground
const groundGeometry = new THREE.PlaneGeometry(20, 20)
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x333333,
  roughness: 0.8
})
const ground = new THREE.Mesh(groundGeometry, groundMaterial)
ground.rotation.x = -Math.PI / 2
ground.receiveShadow = true
scene.add(ground)

// objects
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
const material = new THREE.MeshStandardMaterial({
  color: 0xff6b6b,
  roughness: 0.4,
  metalness: 0.2
})

const box = new THREE.Mesh(geometry, material)
box.position.set(0, 1, 0)
box.castShadow = true
scene.add(box)

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0x4ecdc4, roughness: 0.3 })
)
sphere.position.set(-3, 1, 0)
sphere.castShadow = true
scene.add(sphere)

const cone = new THREE.Mesh(
  new THREE.ConeGeometry(1, 2, 32),
  new THREE.MeshStandardMaterial({ color: 0xffe66d, roughness: 0.6 })
)
cone.position.set(3, 1, 0)
cone.castShadow = true
scene.add(cone)

// light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(5, 10, 5)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.left = -10
directionalLight.shadow.camera.right = 10
directionalLight.shadow.camera.top = 10
directionalLight.shadow.camera.bottom = -10
directionalLight.shadow.camera.near = 0.5
directionalLight.shadow.camera.far = 30
scene.add(directionalLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)

// shadow type switcher
const shadowTypes = [
  { type: THREE.BasicShadowMap, name: 'BasicShadowMap' },
  { type: THREE.PCFShadowMap, name: 'PCFShadowMap' },
  { type: THREE.PCFSoftShadowMap, name: 'PCFSoftShadowMap' },
  { type: THREE.VSMShadowMap, name: 'VSMShadowMap' }
]

function setShadowType(index) {
  const shadowType = shadowTypes[index]
  renderer.shadowMap.type = shadowType.type
  renderer.shadowMap.needsUpdate = true
  info.textContent = `Shadow type: ${shadowType.name} (press 1-4 to switch)`
}

window.addEventListener('keydown', (event) => {
  const key = event.key
  if (key >= '1' && key <= '4') {
    setShadowType(parseInt(key, 10) - 1)
  }
})

// animation
function animate() {
  requestAnimationFrame(animate)

  const time = Date.now() * 0.001

  box.rotation.y = time
  sphere.rotation.y = time
  cone.rotation.y = time

  box.position.y = 1 + Math.sin(time) * 0.5
  sphere.position.y = 1 + Math.sin(time + Math.PI * 0.66) * 0.5
  cone.position.y = 1 + Math.sin(time + Math.PI * 1.33) * 0.5

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
