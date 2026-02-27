/**
 * common lighting setup patterns
 */

/**
 * basic three-point lighting
 *
 * // key light (main)
 * const key = new THREE.DirectionalLight(0xffffff, 1)
 * key.position.set(5, 5, 5)
 * 
 * // fill light (soften shadows)
 * const fill = new THREE.DirectionalLight(0xffffff, 0.3)
 * fill.position.set(-5, 0, 5)
 * 
 * // rim/back light (edge highlight)
 * const rim = new THREE.DirectionalLight(0xffffff, 0.5)
 * rim.position.set(0, 5, -5)
 */

/**
 * outdoor scene lighting
 *
 * // sun
 * const sun = new THREE.DirectionalLight(0xffffff, 1)
 * sun.position.set(10, 20, 10)
 * 
 * // ambient sky light
 * const ambient = new THREE.AmbientLight(0x404040, 0.5)
 * 
 * // or use hemisphere
 * const hemi = new THREE.HemisphereLight(0x87ceeb, 0x8b7355, 0.6)
 */

/**
 * indoor scene lighting
 *
 * // general ambient
 * const ambient = new THREE.AmbientLight(0xffffff, 0.3)
 * 
 * // ceiling lights
 * const ceiling1 = new THREE.PointLight(0xffffff, 0.8, 50)
 * ceiling1.position.set(-5, 5, 0)
 * 
 * const ceiling2 = new THREE.PointLight(0xffffff, 0.8, 50)
 * ceiling2.position.set(5, 5, 0)
 */

/**
 * dramatic/moody lighting
 *
 * // low ambient
 * const ambient = new THREE.AmbientLight(0x202020, 0.2)
 * 
 * // strong directional
 * const key = new THREE.DirectionalLight(0xffffff, 1.5)
 * key.position.set(10, 5, 0)
 * 
 * // colored accent
 * const accent = new THREE.PointLight(0x0088ff, 0.5, 30)
 * accent.position.set(-5, 2, 5)
 */

/**
 * minimal/performance setup
 *
 * // just ambient + directional
 * const ambient = new THREE.AmbientLight(0xffffff, 0.4)
 * const sun = new THREE.DirectionalLight(0xffffff, 0.8)
 * sun.position.set(5, 5, 5)
 */

/**
 * product showcase lighting
 *
 * // bright even lighting
 * const ambient = new THREE.AmbientLight(0xffffff, 0.6)
 * const key = new THREE.DirectionalLight(0xffffff, 0.8)
 * key.position.set(5, 5, 5)
 * const fill = new THREE.DirectionalLight(0xffffff, 0.4)
 * fill.position.set(-5, 0, -5)
 */
