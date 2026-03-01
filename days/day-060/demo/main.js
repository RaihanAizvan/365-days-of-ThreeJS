import * as THREE from 'three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

/**
 * day 60 - light helpers and debugging demo
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
camera.position.set(8, 6, 12)
camera.lookAt(0, 0, 0)

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

// objects
const groundGeometry = new THREE.PlaneGeometry(30, 30)
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x333333,
  roughness: 0.8,
  metalness: 0.2
})
const ground = new THREE.Mesh(groundGeometry, groundMaterial)
ground.rotation.x = -Math.PI / 2
ground.receiveShadow = true
scene.add(ground)

const geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshStandardMaterial({
  color: 0x4ecdc4,
  roughness: 0.4,
  metalness: 0.3
})

const sphere = new THREE.Mesh(geometry, material)
sphere.position.set(0, 1, 0)
sphere.castShadow = true
scene.add(sphere)

// lights

// directional light + helper + shadow camera helper
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.position.set(5, 10, 5)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.left = -10
directionalLight.shadow.camera.right = 10
directionalLight.shadow.camera.top = 10
directionalLight.shadow.camera.bottom = -10
scene.add(directionalLight)

const directionalHelper = new THREE.DirectionalLightHelper(directionalLight, 2, 0xffff00)
scene.add(directionalHelper)

const shadowCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
scene.add(shadowCameraHelper)

// point light + helper
const pointLight = new THREE.PointLight(0xff00ff, 1, 20)
pointLight.position.set(-6, 4, 0)
scene.add(pointLight)

const pointHelper = new THREE.PointLightHelper(pointLight, 0.5, 0xff00ff)
scene.add(pointHelper)

// spot light + helper
const spotLight = new THREE.SpotLight(0x00ffff, 1)
spotLight.position.set(6, 6, 6)
spotLight.angle = Math.PI / 6
spotLight.penumbra = 0.3
spotLight.castShadow = true
scene.add(spotLight)
scene.add(spotLight.target)

const spotHelper = new THREE.SpotLightHelper(spotLight, 0x00ffff)
scene.add(spotHelper)

// hemisphere light + helper
const hemisphereLight = new THREE.HemisphereLight(0x87ceeb, 0x2f4f4f, 0.4)
scene.add(hemisphereLight)

const hemisphereHelper = new THREE.HemisphereLightHelper(hemisphereLight, 2)
scene.add(hemisphereHelper)

// rect area light + helper
const rectLight = new THREE.RectAreaLight(0xffffff, 5, 4, 2)
rectLight.position.set(0, 5, -6)
rectLight.lookAt(0, 0, 0)
scene.add(rectLight)

const rectHelper = new RectAreaLightHelper(rectLight)
rectLight.add(rectHelper)

// animation
function animate() {
  requestAnimationFrame(animate)

  const time = Date.now() * 0.001

  sphere.rotation.y = time
  sphere.position.y = 1.5 + Math.sin(time) * 0.5

  // orbit point light
  pointLight.position.x = Math.cos(time) * 6
  pointLight.position.z = Math.sin(time) * 6
  pointHelper.update()

  // update helpers after light changes
  spotLight.target.position.set(Math.sin(time) * 2, 0, Math.cos(time) * 2)
  spotHelper.update()
  directionalHelper.update()

  renderer.render(scene, camera)
}

animate()

// toggle helpers with H key
window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'h') {
    const helpers = [
      directionalHelper,
      shadowCameraHelper,
      pointHelper,
      spotHelper,
      hemisphereHelper,
      rectHelper
    ]

    helpers.forEach((helper) => {
      helper.visible = !helper.visible
    })
  }
})

// handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
