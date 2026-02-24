import * as THREE from 'three'

/**
 * day 55 - material basics demo
 * 
 * shows different material types side by side
 */

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x1a1a1a)

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 5

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

// lighting - needed for lit materials
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

// geometry - shared by all meshes
const geometry = new THREE.SphereGeometry(0.6, 32, 32)

// material 1: MeshBasicMaterial (unlit)
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0xff6b6b
})
const basicMesh = new THREE.Mesh(geometry, basicMaterial)
basicMesh.position.x = -2.5
scene.add(basicMesh)

// material 2: MeshLambertMaterial (simple lighting)
const lambertMaterial = new THREE.MeshLambertMaterial({
  color: 0x4ecdc4
})
const lambertMesh = new THREE.Mesh(geometry, lambertMaterial)
lambertMesh.position.x = -0.8
scene.add(lambertMesh)

// material 3: MeshPhongMaterial (specular highlights)
const phongMaterial = new THREE.MeshPhongMaterial({
  color: 0xffe66d,
  shininess: 100
})
const phongMesh = new THREE.Mesh(geometry, phongMaterial)
phongMesh.position.x = 0.8
scene.add(phongMesh)

// material 4: MeshStandardMaterial (PBR)
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0xa8dadc,
  metalness: 0.3,
  roughness: 0.4
})
const standardMesh = new THREE.Mesh(geometry, standardMaterial)
standardMesh.position.x = 2.5
scene.add(standardMesh)

// animation
function animate() {
  requestAnimationFrame(animate)

  // rotate all meshes
  const time = Date.now() * 0.001
  basicMesh.rotation.y = time
  lambertMesh.rotation.y = time
  phongMesh.rotation.y = time
  standardMesh.rotation.y = time

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
