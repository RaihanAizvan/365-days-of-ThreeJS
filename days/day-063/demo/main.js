import * as THREE from 'three'

/**
 * day 63 - cube texture demo
 */

// scene
const scene = new THREE.Scene()

// camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
camera.position.set(0, 0, 5)

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

// load cube texture
// using three.js example assets for the demo
const loader = new THREE.CubeTextureLoader()
const path = 'https://threejs.org/examples/textures/cube/Bridge2/'
const format = '.jpg'
const urls = [
    path + 'posx' + format, path + 'negx' + format,
    path + 'posy' + format, path + 'negy' + format,
    path + 'posz' + format, path + 'negz' + format
]

const cubeTexture = loader.load(urls)

// set background
scene.background = cubeTexture

// add a reflective object
const geometry = new THREE.SphereGeometry(1.5, 64, 64)
const material = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0,
    envMap: cubeTexture // reflections
})

const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

// lights (though envMap handles most reflection lighting)
const ambient = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambient)

// animation
function animate() {
    requestAnimationFrame(animate)

    const time = Date.now() * 0.001
    sphere.position.y = Math.sin(time) * 0.2

    renderer.render(scene, camera)
}

animate()

// resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
