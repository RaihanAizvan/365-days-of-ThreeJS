/**
 * MeshStandardMaterial tips and best practices
 */

/**
 * always set both metalness and roughness
 *
 * don't leave defaults - be explicit.
 * these two properties define the material.
 */

/**
 * metalness is usually 0 or 1
 *
 * in-between values rarely used.
 * 0 = dielectric, 1 = conductor.
 * avoid 0.5 unless specific reason.
 */

/**
 * roughness is more gradual
 *
 * use full 0-1 range.
 * subtle changes make big visual difference.
 */

/**
 * use texture maps for variation
 *
 * metalnessMap and roughnessMap add realism.
 * pack both into single texture (R+G channels).
 */

/**
 * requires lighting to be visible
 *
 * add at least ambient + directional light.
 * won't render properly without lights.
 */

/**
 * environment maps boost realism
 *
 * material.envMap = cubeTexture
 * provides reflections of surroundings.
 * huge visual improvement.
 */

/**
 * performance considerations
 *
 * more expensive than MeshBasicMaterial.
 * normal maps and env maps add cost.
 * use LOD or switch materials by distance.
 */

/**
 * color is less important for metals
 *
 * metals get color from reflections.
 * base color tints the reflections.
 */

/**
 * test with different lighting
 *
 * PBR materials look different under various lights.
 * test with point, directional, and ambient.
 */
