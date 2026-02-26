/**
 * day 57 - PBR (physically-based rendering) basics
 */

/**
 * what is PBR?
 *
 * physically-based rendering simulates real-world light behavior.
 * materials respond realistically to lighting.
 * consistent across different lighting conditions.
 */

/**
 * core PBR properties
 *
 * metalness: 0 = dielectric (plastic, wood), 1 = metal
 * roughness: 0 = smooth/shiny, 1 = rough/matte
 */

/**
 * metalness explained
 *
 * non-metals (0): colored diffuse, white specular
 * metals (1): no diffuse, colored specular/reflection
 * 
 * examples:
 * - plastic, wood, ceramic: 0
 * - iron, gold, copper: 1
 */

/**
 * roughness explained
 *
 * smooth (0): sharp reflections, glossy
 * rough (1): blurry reflections, matte
 * 
 * examples:
 * - polished metal: 0-0.2
 * - plastic: 0.3-0.5
 * - rough stone: 0.8-1.0
 */

/**
 * why PBR?
 *
 * - consistent across lighting
 * - artist-friendly parameters
 * - industry standard (games, film)
 * - energy conservation (realistic)
 */
