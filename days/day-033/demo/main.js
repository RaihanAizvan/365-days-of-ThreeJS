import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(12, 12))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(0, 2, 5)
camera.lookAt(0, 0.5, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.6))
const dir = new THREE.DirectionalLight(0xffffff, 1.2)
dir.position.set(3, 4, 2)
scene.add(dir)

const material = new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35, side: THREE.DoubleSide })

// non-indexed quad (two triangles, 6 vertices)
const nonIndexed = new THREE.BufferGeometry()
const nonIndexedPositions = new Float32Array([
  -1.2, 0, 0,
  0, 1.2, 0,
  1.2, 0, 0,

  -1.2, 0, 0,
  1.2, 0, 0,
  0, -1.2, 0
])
nonIndexed.setAttribute('position', new THREE.BufferAttribute(nonIndexedPositions, 3))
nonIndexed.computeVertexNormals()

const meshA = new THREE.Mesh(nonIndexed, material)
meshA.position.set(-2.2, 0.4, 0)
scene.add(meshA)

// indexed quad (four vertices + 6 indices)
const indexed = new THREE.BufferGeometry()
const indexedPositions = new Float32Array([
  -1.2, 0, 0,
  0, 1.2, 0,
  1.2, 0, 0,
  0, -1.2, 0
])
indexed.setAttribute('position', new THREE.BufferAttribute(indexedPositions, 3))
indexed.setIndex([0, 1, 2, 0, 2, 3])
indexed.computeVertexNormals()

const meshB = new THREE.Mesh(indexed, material)
meshB.position.set(2.2, 0.4, 0)
scene.add(meshB)

console.log('[non-indexed] vertices:', nonIndexedPositions.length / 3, 'triangles:', nonIndexedPositions.length / 9)
console.log('[indexed] vertices:', indexedPositions.length / 3, 'triangles:', indexed.index.count / 3)

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
  meshA.rotation.y = t * 0.6
  meshB.rotation.y = t * 0.6

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
