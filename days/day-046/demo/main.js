import * as THREE from 'three'

const canvas = document.querySelector('#webgl')

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x0f0f12)

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50)
camera.position.set(0, 2, 4)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace

const geometry = new THREE.PlaneGeometry(3, 3, 1, 1)
geometry.rotateX(-Math.PI / 2)

const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('/days/day-045/demo/textures/checker.png')
texture.colorSpace = THREE.SRGBColorSpace
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(2, 2)

const material = new THREE.MeshStandardMaterial({ map: texture, side: THREE.DoubleSide })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2, 4, 3)
scene.add(light)

const ambient = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambient)

const controls = {
  repeatU: 2,
  repeatV: 2,
  offsetU: 0,
  offsetV: 0
}

const bindRange = (id, key) => {
  const input = document.querySelector(id)
  const label = document.querySelector(`${id}-value`)
  const update = () => {
    const value = Number(input.value)
    controls[key] = value
    label.textContent = value.toFixed(2)
  }
  input.addEventListener('input', update)
  update()
}

bindRange('#repeat-u', 'repeatU')
bindRange('#repeat-v', 'repeatV')
bindRange('#offset-u', 'offsetU')
bindRange('#offset-v', 'offsetV')

const clock = new THREE.Clock()

const resize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

window.addEventListener('resize', resize)

const tick = () => {
  const elapsed = clock.getElapsedTime()
  mesh.rotation.z = Math.sin(elapsed * 0.5) * 0.15

  texture.repeat.set(controls.repeatU, controls.repeatV)
  texture.offset.set(controls.offsetU, controls.offsetV)

  renderer.render(scene, camera)
  requestAnimationFrame(tick)
}

tick()
