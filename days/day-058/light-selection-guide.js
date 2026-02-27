/**
 * light type selection guide
 */

/**
 * when to use AmbientLight
 *
 * - always use as base illumination
 * - fills in shadows
 * - prevents pure black areas
 * - never use alone (too flat)
 */

/**
 * when to use DirectionalLight
 *
 * - sunlight or moonlight
 * - consistent parallel lighting
 * - outdoor scenes
 * - when you need shadows from afar
 */

/**
 * when to use PointLight
 *
 * - light bulbs, lamps
 * - torches, fires
 * - explosions, muzzle flashes
 * - any omnidirectional light source
 */

/**
 * when to use SpotLight
 *
 * - flashlights, car headlights
 * - stage lighting
 * - focused dramatic lighting
 * - highlighting specific objects
 */

/**
 * when to use HemisphereLight
 *
 * - outdoor ambient (sky + ground)
 * - more natural than AmbientLight
 * - good for landscapes
 * - replaces or supplements AmbientLight
 */

/**
 * when to use RectAreaLight
 *
 * - LED panels, windows
 * - soft box studio lighting
 * - architectural lighting
 * - only works with Standard/Physical materials
 */

/**
 * performance ranking (fastest to slowest)
 *
 * 1. AmbientLight (cheapest)
 * 2. HemisphereLight
 * 3. DirectionalLight
 * 4. PointLight
 * 5. SpotLight
 * 6. RectAreaLight (most expensive)
 */

/**
 * typical scene light budgets
 *
 * mobile: 1-3 lights
 * desktop: 3-5 lights
 * high-end: 5-8 lights
 * 
 * more than 8 lights = consider baked lighting
 */
