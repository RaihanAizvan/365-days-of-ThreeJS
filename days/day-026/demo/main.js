import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const pauseBtn = document.querySelector('#pause')
const statsEl = document.querySelector('#stats')

const timeScaleEl = document.querySelector('#timeScale')
const timeScaleValEl = document.querySelector('#timeScaleVal')
const maxDtEl = document.querySelector('#maxDt')
const maxDtValEl = document.querySelector('#maxDtVal')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(14, 14))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(7, 4, 9)
camera.lookAt(0, 1, 0)
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

const geo = new THREE.BoxGeometry(1, 1, 1)
const mesh = new THREE.Mesh(
  geo,
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
)
mesh.position.set(0, 0.5, 0)
scene.add(mesh)

// simulation state
let paused = false
let timeScale = Number(timeScaleEl.value)
let maxDt = Number(maxDtEl.value)
let simTime = 0

pauseBtn.addEventListener('click', () => {
  paused = !paused
  pauseBtn.textContent = paused ? 'Resume' : 'Pause'

  // important: reset previous time on resume to avoid a huge dt
  previous = performance.now()
})

timeScaleEl.addEventListener('input', () => {
  timeScale = Number(timeScaleEl.value)
  timeScaleValEl.innerHTML = `<code>${timeScale.toFixed(2)}</code>`
})

maxDtEl.addEventListener('input', () => {
  maxDt = Number(maxDtEl.value)
  maxDtValEl.innerHTML = `<code>${maxDt.toFixed(2)}</code>`
})

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

let previous = performance.now()

function tick(now) {
  const rawDt = (now - previous) / 1000
  previous = now

  // clamp and scale
  const clampedDt = Math.min(rawDt, maxDt)
  const dt = paused ? 0 : clampedDt * timeScale

  simTime += dt

  // use simTime (scaled) for periodic motion
  mesh.position.x = Math.sin(simTime * 1.2) * 3
  mesh.rotation.y = simTime * 1.5

  statsEl.textContent = `rawDt: ${rawDt.toFixed(4)}s | clamped: ${clampedDt.toFixed(4)}s | scaled dt: ${dt.toFixed(4)}s | simTime: ${simTime.toFixed(2)}s`

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

timeScaleValEl.innerHTML = `<code>${timeScale.toFixed(2)}</code>`
maxDtValEl.innerHTML = `<code>${maxDt.toFixed(2)}</code>`

window.requestAnimationFrame(tick)
