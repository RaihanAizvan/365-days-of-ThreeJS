import * as THREE from 'three'

/**
 * day 57 - MeshStandardMaterial deep dive demo
 * 
 * demonstrates metalness and roughness variations
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
camera.position.z = 10
camera.position.y = 2

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

// lighting - essential for MeshStandardMaterial
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

const pointLight = new THREE.PointLight(0x4ecdc4, 1, 100)
pointLight.position.set(-5, 3, 0)
scene.add(pointLight)

// geometry - shared
const geometry = new THREE.SphereGeometry(0.7, 64, 64)

// row 1: varying metalness (roughness = 0.2)
const metalness0 = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0xff6b6b,
  metalness: 0.0,
  roughness: 0.2
}))
metalness0.position.set(-4, 2, 0)
scene.add(metalness0)

const metalness05 = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0xff6b6b,
  metalness: 0.5,
  roughness: 0.2
}))
metalness05.position.set(-2, 2, 0)
scene.add(metalness05)

const metalness1 = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0xff6b6b,
  metalness: 1.0,
  roughness: 0.2
}))
metalness1.position.set(0, 2, 0)
scene.add(metalness1)

// row 2: varying roughness (metalness = 0.0)
const roughness0 = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0x4ecdc4,
  metalness: 0.0,
  roughness: 0.0
}))
roughness0.position.set(-4, 0, 0)
scene.add(roughness0)

const roughness05 = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0x4ecdc4,
  metalness: 0.0,
  roughness: 0.5
}))
roughness05.position.set(-2, 0, 0)
scene.add(roughness05)

const roughness1 = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0x4ecdc4,
  metalness: 0.0,
  roughness: 1.0
}))
roughness1.position.set(0, 0, 0)
scene.add(roughness1)

// row 3: material presets
const plastic = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0xffe66d,
  metalness: 0.0,
  roughness: 0.4
}))
plastic.position.set(-4, -2, 0)
scene.add(plastic)

const gold = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0xffd700,
  metalness: 1.0,
  roughness: 0.2
}))
gold.position.set(-2, -2, 0)
scene.add(gold)

const rubber = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0x333333,
  metalness: 0.0,
  roughness: 0.9
}))
rubber.position.set(0, -2, 0)
scene.add(rubber)

// animation
function animate() {
  requestAnimationFrame(animate)

  const time = Date.now() * 0.0005

  // rotate all meshes slowly
  scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.rotation.y = time
    }
  })

  // orbit point light
  pointLight.position.x = Math.cos(time * 2) * 5
  pointLight.position.z = Math.sin(time * 2) * 5

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
