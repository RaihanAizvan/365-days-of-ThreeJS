import * as THREE from 'three'

/**
 * day 59 - shadows basics demo
 * 
 * demonstrates shadow setup and configuration
 */

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x87ceeb)

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(10, 10, 10)
camera.lookAt(0, 0, 0)

// renderer with shadows enabled
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true  // STEP 1: enable shadows
renderer.shadowMap.type = THREE.PCFSoftShadowMap  // soft shadows
document.body.appendChild(renderer.domElement)

// ground plane - receives shadows
const groundGeometry = new THREE.PlaneGeometry(30, 30)
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x90ee90,
  roughness: 0.8,
  metalness: 0.2
})
const ground = new THREE.Mesh(groundGeometry, groundMaterial)
ground.rotation.x = -Math.PI / 2
ground.receiveShadow = true  // STEP 4: receive shadows
scene.add(ground)

// create objects that cast shadows
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
const coneGeometry = new THREE.ConeGeometry(1, 2, 32)

const material = new THREE.MeshStandardMaterial({
  color: 0xff6b6b,
  roughness: 0.5,
  metalness: 0.3
})

const sphere = new THREE.Mesh(sphereGeometry, material)
sphere.position.set(-5, 1, 0)
sphere.castShadow = true  // STEP 3: cast shadows
scene.add(sphere)

const box = new THREE.Mesh(boxGeometry, material.clone())
box.material.color.set(0x4ecdc4)
box.position.set(0, 1, 0)
box.castShadow = true
scene.add(box)

const cone = new THREE.Mesh(coneGeometry, material.clone())
cone.material.color.set(0xffe66d)
cone.position.set(5, 1, 0)
cone.castShadow = true
scene.add(cone)

// lighting

// ambient light - no shadows
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambientLight)

// directional light with shadows - main light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.position.set(10, 15, 5)
directionalLight.castShadow = true  // STEP 2: light casts shadows

// configure shadow quality
directionalLight.shadow.mapSize.width = 2048
directionalLight.shadow.mapSize.height = 2048
directionalLight.shadow.camera.left = -15
directionalLight.shadow.camera.right = 15
directionalLight.shadow.camera.top = 15
directionalLight.shadow.camera.bottom = -15
directionalLight.shadow.camera.near = 0.5
directionalLight.shadow.camera.far = 50
directionalLight.shadow.bias = -0.0001

scene.add(directionalLight)

// optional: add shadow camera helper (debugging)
const shadowCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
// scene.add(shadowCameraHelper)  // uncomment to see shadow frustum

// point light without shadows (for fill light)
const pointLight = new THREE.PointLight(0x4ecdc4, 0.3, 50)
pointLight.position.set(-10, 5, -10)
// note: castShadow is false (default) - no shadows for performance
scene.add(pointLight)

// animation
function animate() {
  requestAnimationFrame(animate)

  const time = Date.now() * 0.001

  // float objects up and down
  sphere.position.y = 2 + Math.sin(time) * 1.5
  box.position.y = 2 + Math.sin(time + Math.PI * 0.66) * 1.5
  cone.position.y = 2 + Math.sin(time + Math.PI * 1.33) * 1.5

  // rotate objects
  sphere.rotation.y = time * 0.5
  box.rotation.y = time * 0.5
  box.rotation.x = time * 0.3
  cone.rotation.y = time * 0.5

  renderer.render(scene, camera)
}

animate()

// handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
