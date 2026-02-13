/**
 * day 44 - image formats demo
 * interactive format comparison
 */

import * as THREE from 'three'

// format data
const formats = {
  png: {
    name: 'PNG',
    desc: 'Lossless compression with full transparency support',
    size: '~512 KB (512×512)',
    compression: 'Lossless',
    transparency: 'Full RGBA',
    useCase: 'Graphics, UI, logos',
    pros: ['Perfect quality', 'Transparency', 'Browser support'],
    cons: ['Larger files', 'No animation (APNG rare)'],
    color: 0x6495ed
  },
  jpeg: {
    name: 'JPEG',
    desc: 'Lossy compression optimized for photographs',
    size: '~85 KB (512×512)',
    compression: 'Lossy (quality: 75-90)',
    transparency: 'None (RGB only)',
    useCase: 'Photographs, continuous tone',
    pros: ['Excellent compression', 'Small files', 'Widely supported'],
    cons: ['Visible artifacts', 'No transparency', 'Quality loss'],
    color: 0xff9500
  },
  webp: {
    name: 'WebP',
    desc: 'Modern format with superior compression (lossy/lossless)',
    size: '~70 KB (512×512)',
    compression: 'Lossy or Lossless',
    transparency: 'Full RGBA support',
    useCase: 'Modern web, all content',
    pros: ['Best compression', 'Transparency', 'Animation support'],
    cons: ['Older browser fallback needed', 'Generation tools required'],
    color: 0x4CAF50
  },
  hdr: {
    name: 'HDR (RGBE)',
    desc: 'High dynamic range with floating-point precision',
    size: '~200 KB (512×512)',
    compression: 'None (32-bit color)',
    transparency: 'Full RGBA with HDR',
    useCase: 'Environment maps, lighting',
    pros: ['Preserves dynamic range', 'Excellent for IBL', 'Compact'],
    cons: ['Larger files', 'Special loaders needed', 'Complex format'],
    color: 0xFF1744
  }
}

// scene setup
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x0a0a0a)

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 3

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.getElementById('canvas-container').appendChild(renderer.domElement)

// create rotating boxes for each format
const boxes = {}
let currentFormat = 'png'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

Object.keys(formats).forEach((key, index) => {
  const format = formats[key]

  // create material with format color
  const material = new THREE.MeshPhongMaterial({
    color: format.color,
    emissive: format.color,
    emissiveIntensity: 0.2,
    wireframe: false,
    shininess: 100
  })

  const mesh = new THREE.Mesh(boxGeometry, material)

  // arrange boxes in a circle
  const angle = (index / Object.keys(formats).length) * Math.PI * 2
  mesh.position.x = Math.cos(angle) * 2
  mesh.position.y = Math.sin(angle) * 2

  mesh.rotation.x = Math.random() * Math.PI
  mesh.rotation.y = Math.random() * Math.PI

  boxes[key] = {
    mesh,
    angle,
    rotationSpeed: 0.005 + Math.random() * 0.005
  }

  scene.add(mesh)
})

// add lighting
const light1 = new THREE.DirectionalLight(0xffffff, 1)
light1.position.set(5, 5, 5)
scene.add(light1)

const light2 = new THREE.DirectionalLight(0xff00ff, 0.3)
light2.position.set(-5, -5, 5)
scene.add(light2)

const ambientLight = new THREE.AmbientLight(0x404040)
scene.add(ambientLight)

// UI interaction
const formatButtons = document.querySelectorAll('.format-btn')

formatButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentFormat = btn.dataset.format
    updateUI(currentFormat)

    // update button states
    formatButtons.forEach((b) => b.classList.remove('active'))
    btn.classList.add('active')

    // scale selected box
    Object.keys(boxes).forEach((key) => {
      boxes[key].mesh.scale.setScalar(key === currentFormat ? 1.3 : 1)
    })
  })
})

function updateUI(format) {
  const data = formats[format]
  document.getElementById('formatName').textContent = data.name
  document.getElementById('formatDesc').textContent = data.desc
  document.getElementById('sizeValue').textContent = data.size
  document.getElementById('compressionValue').textContent = data.compression
  document.getElementById('transparencyValue').textContent = data.transparency
  document.getElementById('useCaseValue').textContent = data.useCase
}

// initialize UI
updateUI(currentFormat)

// handle window resize
window.addEventListener('resize', () => {
  const w = window.innerWidth
  const h = window.innerHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
})

// animation loop
function animate() {
  requestAnimationFrame(animate)

  // rotate all boxes
  Object.keys(boxes).forEach((key) => {
    const box = boxes[key]
    box.mesh.rotation.x += box.rotationSpeed
    box.mesh.rotation.y += box.rotationSpeed * 0.7

    // pulse effect on selected
    if (key === currentFormat) {
      const pulse = Math.sin(Date.now() * 0.003) * 0.05 + 1
      box.mesh.scale.setScalar(1.3 * pulse)
    }
  })

  renderer.render(scene, camera)
}

animate()

console.log('📊 Day 44 - Image Formats')
console.log('Click buttons to learn about different formats')
console.log('Formats: PNG, JPEG, WebP, HDR')
