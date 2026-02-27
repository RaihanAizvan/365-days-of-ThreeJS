import * as THREE from 'three'

/**
 * day 58 - lighting basics demo
 * 
 * demonstrates different light types
 */

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x0a0a0a)

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(0, 5, 15)
camera.lookAt(0, 0, 0)

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

// ground plane
const groundGeometry = new THREE.PlaneGeometry(30, 30)
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x333333,
  roughness: 0.8,
  metalness: 0.2
})
const ground = new THREE.Mesh(groundGeometry, groundMaterial)
ground.rotation.x = -Math.PI / 2
scene.add(ground)

// create spheres to show lighting effects
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.5,
  metalness: 0.3
})

const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere1.position.set(-6, 1, 0)
scene.add(sphere1)

const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial.clone())
sphere2.material.color.set(0xff6b6b)
sphere2.position.set(-2, 1, 0)
scene.add(sphere2)

const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial.clone())
sphere3.material.color.set(0x4ecdc4)
sphere3.position.set(2, 1, 0)
scene.add(sphere3)

const sphere4 = new THREE.Mesh(sphereGeometry, sphereMaterial.clone())
sphere4.material.color.set(0xffe66d)
sphere4.position.set(6, 1, 0)
scene.add(sphere4)

// lighting setup

// 1. AmbientLight - base illumination
const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
scene.add(ambientLight)

// 2. DirectionalLight - key light (sun-like)
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.position.set(5, 10, 5)
scene.add(directionalLight)

// 3. PointLight - accent light (moving)
const pointLight = new THREE.PointLight(0xff00ff, 1, 20)
pointLight.position.set(0, 3, 0)
scene.add(pointLight)

// add light helper to visualize point light
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5)
scene.add(pointLightHelper)

// 4. SpotLight - dramatic effect
const spotLight = new THREE.SpotLight(0x00ffff, 1)
spotLight.position.set(-8, 10, 0)
spotLight.angle = Math.PI / 6
spotLight.penumbra = 0.3
spotLight.distance = 30
scene.add(spotLight)
scene.add(spotLight.target) // spotlight needs target

// visualization sphere for spot position
const spotSphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.3),
  new THREE.MeshBasicMaterial({ color: 0x00ffff })
)
spotSphere.position.copy(spotLight.position)
scene.add(spotSphere)

// animation
function animate() {
  requestAnimationFrame(animate)

  const time = Date.now() * 0.001

  // orbit the point light
  pointLight.position.x = Math.cos(time) * 8
  pointLight.position.z = Math.sin(time) * 8
  pointLightHelper.update()

  // rotate spheres to show lighting from all angles
  sphere1.rotation.y = time * 0.5
  sphere2.rotation.y = time * 0.5
  sphere3.rotation.y = time * 0.5
  sphere4.rotation.y = time * 0.5

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
