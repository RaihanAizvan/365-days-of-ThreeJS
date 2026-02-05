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
camera.lookAt(0, 0.5, 0)
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
const doubleSided = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.4, side: THREE.DoubleSide })

// plane
const plane = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.2, 1, 1), material)
plane.rotation.x = -Math.PI / 2
plane.position.set(-3, 0, 0)
scene.add(plane)

// circle
const circle = new THREE.Mesh(new THREE.CircleGeometry(1.1, 48), doubleSided)
circle.rotation.x = -Math.PI / 2
circle.position.set(0, 0.01, 0)
scene.add(circle)

// ring
const ring = new THREE.Mesh(new THREE.RingGeometry(0.5, 1.1, 48), doubleSided)
ring.rotation.x = -Math.PI / 2
ring.position.set(3, 0.01, 0)
scene.add(ring)

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
  plane.rotation.z = t * 0.2
  circle.rotation.z = -t * 0.3
  ring.rotation.z = t * 0.4

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
