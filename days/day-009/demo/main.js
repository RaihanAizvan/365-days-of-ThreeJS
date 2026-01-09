import * as THREE from 'three'

const statusEl = document.querySelector('#status')
const canvas = document.querySelector('#webgl')

// --- sizes ---
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// --- scene ---
const scene = new THREE.Scene()

// --- camera ---
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100)
camera.position.set(1.8, 1.2, 3)
scene.add(camera)

// --- renderer (creates/owns the WebGL context by default) ---
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false
})

renderer.setClearColor(0x0f0f12, 1)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// The underlying WebGL context object (gl)
const gl = renderer.getContext()

// Print some context info
console.group('Day 9 — WebGL context info')
console.log('WebGLRenderingContext:', gl)
console.log('VERSION:', gl.getParameter(gl.VERSION))
console.log('SHADING_LANGUAGE_VERSION:', gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
console.log('VENDOR:', gl.getParameter(gl.VENDOR))
console.log('RENDERER:', gl.getParameter(gl.RENDERER))
console.groupEnd()

statusEl.textContent = 'Running (context acquired)'

// --- objects ---
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshStandardMaterial({
  color: 0x4aa3ff,
  roughness: 0.35,
  metalness: 0.1
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// lights (still renders via WebGL context, just more steps)
const ambient = new THREE.AmbientLight(0xffffff, 0.45)
scene.add(ambient)

const dir = new THREE.DirectionalLight(0xffffff, 1.2)
dir.position.set(2, 3, 4)
scene.add(dir)

// --- resize handling ---
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// --- context loss handling ---
canvas.addEventListener('webglcontextlost', (event) => {
  // prevent default so the browser allows us to restore
  event.preventDefault()
  statusEl.textContent = 'Context lost (see console)'
  console.warn('WebGL context lost:', event)
})

canvas.addEventListener('webglcontextrestored', () => {
  statusEl.textContent = 'Context restored (see console)'
  console.warn('WebGL context restored — GPU resources may need re-creation')
})

// --- animation loop ---
const clock = new THREE.Clock()

function tick() {
  const t = clock.getElapsedTime()

  cube.rotation.x = t * 0.6
  cube.rotation.y = t * 0.9

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
