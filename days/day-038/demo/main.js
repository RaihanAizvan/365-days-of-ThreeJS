import * as THREE from 'three'

const canvas = document.querySelector('#webgl')
const randomizeBtn = document.querySelector('#randomize')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(12, 12))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(0, 3, 6)
camera.lookAt(0, 0, 0)
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

// plane geometry with segments so we can deform it
const geometry = new THREE.PlaneGeometry(4, 4, 6, 6)
geometry.rotateX(-Math.PI / 2)

const material = new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.4, side: THREE.DoubleSide })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const position = geometry.attributes.position
console.log('attributes:', geometry.attributes)
console.log('position.count:', position.count, 'itemSize:', position.itemSize)

function randomizeHeights() {
  for (let i = 0; i < position.count; i++) {
    // y is index 1 in the vector (x, y, z)
    const yIndex = i * 3 + 1
    position.array[yIndex] = (Math.random() - 0.5) * 0.8
  }
  position.needsUpdate = true
  geometry.computeVertexNormals()
}

randomizeBtn.addEventListener('click', randomizeHeights)

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
  mesh.rotation.y = t * 0.3

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
