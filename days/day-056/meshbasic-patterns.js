/**
 * MeshBasicMaterial patterns and techniques
 */

/**
 * animated color cycling
 *
 * function animate() {
 *   const hue = (Date.now() * 0.001) % 1
 *   material.color.setHSL(hue, 1, 0.5)
 * }
 */

/**
 * fake glow effect
 *
 * const glowMaterial = new THREE.MeshBasicMaterial({
 *   color: 0x00ffff,
 *   transparent: true,
 *   opacity: 0.8
 * })
 * // scale slightly larger for outer glow
 */

/**
 * texture scrolling
 *
 * function animate(delta) {
 *   material.map.offset.x += delta * 0.1
 * }
 */

/**
 * silhouette rendering
 *
 * const silhouetteMaterial = new THREE.MeshBasicMaterial({
 *   color: 0x000000,
 *   side: THREE.BackSide
 * })
 * // render slightly scaled up for outline
 */

/**
 * fog integration
 *
 * scene.fog = new THREE.Fog(0x000000, 10, 50)
 * material.fog = true  // default, respects scene fog
 */

/**
 * layered transparency
 *
 * // render multiple transparent materials
 * material1.transparent = true
 * material1.opacity = 0.3
 * material1.depthWrite = false  // prevent z-fighting
 */
