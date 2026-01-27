import * as THREE from 'three'

const webglCanvas = document.querySelector('#webgl')
const chartCanvas = document.querySelector('#chart')
const ctx = chartCanvas.getContext('2d')

const maxDtEl = document.querySelector('#maxDt')
const maxDtValEl = document.querySelector('#maxDtVal')
const alphaEl = document.querySelector('#alpha')
const alphaValEl = document.querySelector('#alphaVal')
const statsEl = document.querySelector('#stats')

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

const renderer = new THREE.WebGLRenderer({ canvas: webglCanvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x0f0f12, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace

scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const dir = new THREE.DirectionalLight(0xffffff, 1.3)
dir.position.set(4, 6, 3)
scene.add(dir)

const geo = new THREE.BoxGeometry(1, 1, 1)
const rawMesh = new THREE.Mesh(
  geo,
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.35 })
)
rawMesh.position.set(-2.5, 0.5, 0)
scene.add(rawMesh)

const smoothMesh = new THREE.Mesh(
  geo,
  new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.35 })
)
smoothMesh.position.set(2.5, 0.5, 0)
scene.add(smoothMesh)

const speed = 2.3

let maxDt = Number(maxDtEl.value)
let alpha = Number(alphaEl.value)

maxDtEl.addEventListener('input', () => {
  maxDt = Number(maxDtEl.value)
  maxDtValEl.innerHTML = `<code>${maxDt.toFixed(2)}</code>`
})

alphaEl.addEventListener('input', () => {
  alpha = Number(alphaEl.value)
  alphaValEl.innerHTML = `<code>${alpha.toFixed(2)}</code>`
})

maxDtValEl.innerHTML = `<code>${maxDt.toFixed(2)}</code>`
alphaValEl.innerHTML = `<code>${alpha.toFixed(2)}</code>`

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// dt tracking
let previous = performance.now()
let smoothDt = 1 / 60

const rawHistory = []
const smoothHistory = []
const maxHistory = 120

function pushHistory(arr, v) {
  arr.push(v)
  if (arr.length > maxHistory) arr.shift()
}

function drawChart() {
  const w = chartCanvas.width
  const h = chartCanvas.height

  ctx.clearRect(0, 0, w, h)

  // background grid
  ctx.fillStyle = 'rgba(0,0,0,0.35)'
  ctx.fillRect(0, 0, w, h)

  ctx.strokeStyle = 'rgba(255,255,255,0.08)'
  ctx.beginPath()
  for (let i = 1; i < 4; i++) {
    const y = (h * i) / 4
    ctx.moveTo(0, y)
    ctx.lineTo(w, y)
  }
  ctx.stroke()

  // scale: 0..maxDt*1.5 shown
  const yMax = maxDt * 1.5

  function plot(arr, color) {
    if (arr.length < 2) return
    ctx.strokeStyle = color
    ctx.beginPath()
    for (let i = 0; i < arr.length; i++) {
      const x = (i / (maxHistory - 1)) * w
      const v = arr[i]
      const y = h - (Math.min(v, yMax) / yMax) * h
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  }

  plot(rawHistory, 'rgba(255,255,255,0.9)')
  plot(smoothHistory, 'rgba(100,255,140,0.9)')

  // legend
  ctx.fillStyle = 'rgba(255,255,255,0.85)'
  ctx.font = '12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
  ctx.fillText('raw dt', 10, 18)
  ctx.fillStyle = 'rgba(100,255,140,0.9)'
  ctx.fillText('smoothed dt', 10, 34)
}

function tick(now) {
  const rawDt = (now - previous) / 1000
  previous = now

  const clamped = Math.min(rawDt, maxDt)

  // exponential smoothing on the clamped dt
  smoothDt = smoothDt + (clamped - smoothDt) * alpha

  // move
  rawMesh.position.x += speed * clamped
  smoothMesh.position.x += speed * smoothDt

  if (rawMesh.position.x > 5) rawMesh.position.x = -5
  if (smoothMesh.position.x > 5) smoothMesh.position.x = -5

  rawMesh.rotation.y += 0.8 * clamped
  smoothMesh.rotation.y += 0.8 * smoothDt

  pushHistory(rawHistory, clamped)
  pushHistory(smoothHistory, smoothDt)

  statsEl.textContent = `raw dt: ${rawDt.toFixed(4)}s | clamped: ${clamped.toFixed(4)}s | smoothDt: ${smoothDt.toFixed(4)}s`

  drawChart()
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

window.requestAnimationFrame(tick)
