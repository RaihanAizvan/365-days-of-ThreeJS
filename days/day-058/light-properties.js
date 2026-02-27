/**
 * day 58 - common light properties
 */

/**
 * color
 *
 * light.color = new THREE.Color(0xff0000)
 * light.color.set('#ff0000')
 * affects the color of illuminated surfaces
 */

/**
 * intensity
 *
 * light.intensity = 1.0
 * brightness multiplier
 * higher = brighter
 */

/**
 * position (positional lights only)
 *
 * light.position.set(x, y, z)
 * for Point, Spot, Directional lights
 */

/**
 * distance (Point and Spot only)
 *
 * light.distance = 100
 * maximum range of light
 * 0 = infinite distance
 */

/**
 * decay (Point and Spot only)
 *
 * light.decay = 2  // physically correct
 * how light dims over distance
 * 1 = linear, 2 = realistic (inverse square)
 */

/**
 * angle (Spot only)
 *
 * light.angle = Math.PI / 4
 * maximum cone angle in radians
 */

/**
 * penumbra (Spot only)
 *
 * light.penumbra = 0.5  // 0 to 1
 * softness of spotlight edge
 * 0 = hard edge, 1 = very soft
 */

/**
 * target (Directional and Spot)
 *
 * light.target.position.set(0, 0, 0)
 * what the light points at
 * must add target to scene for Spot
 */

/**
 * castShadow
 *
 * light.castShadow = true
 * enables shadow casting
 * performance cost
 */
