/**
 * day 59 - shadow setup basics
 */

/**
 * step 1: enable shadows on renderer
 *
 * renderer.shadowMap.enabled = true
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap  // default
 */

/**
 * step 2: enable shadow casting on lights
 *
 * directionalLight.castShadow = true
 * pointLight.castShadow = true
 * spotLight.castShadow = true
 * 
 * note: AmbientLight and HemisphereLight cannot cast shadows
 */

/**
 * step 3: configure objects to cast shadows
 *
 * mesh.castShadow = true
 * // object will create shadows
 */

/**
 * step 4: configure objects to receive shadows
 *
 * mesh.receiveShadow = true
 * // shadows from other objects will appear on this
 */

/**
 * complete basic setup
 *
 * // renderer
 * renderer.shadowMap.enabled = true
 * 
 * // light
 * const light = new THREE.DirectionalLight(0xffffff, 1)
 * light.castShadow = true
 * 
 * // casting object
 * sphere.castShadow = true
 * 
 * // receiving object (ground)
 * ground.receiveShadow = true
 */

/**
 * shadow map types
 *
 * THREE.BasicShadowMap - fastest, lowest quality
 * THREE.PCFShadowMap - default, good balance
 * THREE.PCFSoftShadowMap - soft shadows, slower
 * THREE.VSMShadowMap - experimental, very soft
 */
