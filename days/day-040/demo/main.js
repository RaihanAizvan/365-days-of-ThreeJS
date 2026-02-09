import * as THREE from 'three'
import { Pane } from 'tweakpane'

const canvas = document.querySelector('#webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const scene = new THREE.Scene()
scene.add(new THREE.GridHelper(12, 12))

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 80)
camera.position.set(0, 3, 6)
camera.lookAt(0, 0.5, 0)
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

const material = new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.4 })
const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.4), material)
mesh.position.y = 0.7
scene.add(mesh)

const params = {
  intensity: 1.2,
  speed: 0.8,
  color: '#4aa3ff'
}

const pane = new Pane({ title: 'Day 40' })
pane.addBinding(params, 'intensity', { min: 0, max: 3, step: 0.01 })
pane.addBinding(params, 'speed', { min: 0, max: 3, step: 0.01 })
pane.addBinding(params, 'color')

pane.addButton({ title: 'Reset' }).on('click', () => {
  params.intensity = 1.2
  params.speed = 0.8
  params.color = '#4aa3ff'
  pane.refresh()
})

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
  dir.intensity = params.intensity
  material.color.set(params.color)

  mesh.rotation.y = t * params.speed
  mesh.rotation.x = t * params.speed * 0.6

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
