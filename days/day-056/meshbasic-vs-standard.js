/**
 * MeshBasicMaterial vs MeshStandardMaterial
 */

/**
 * performance comparison
 *
 * MeshBasicMaterial:
 * - no lighting calculations
 * - fastest material
 * - ~2-5x faster than Standard
 *
 * MeshStandardMaterial:
 * - full PBR lighting
 * - realistic appearance
 * - more expensive
 */

/**
 * visual comparison
 *
 * MeshBasicMaterial:
 * - flat, unlit appearance
 * - no depth perception from lighting
 * - good for stylized looks
 *
 * MeshStandardMaterial:
 * - realistic lighting and shadows
 * - depth and dimension
 * - good for photorealistic scenes
 */

/**
 * when to switch from Basic to Standard
 *
 * use Basic when:
 * - performance is critical
 * - you have hundreds/thousands of objects
 * - unlit aesthetic is desired
 *
 * use Standard when:
 * - realism is important
 * - you have proper lighting setup
 * - performance budget allows
 */

/**
 * hybrid approach
 *
 * use Basic for background/distant objects.
 * use Standard for hero/foreground objects.
 * optimize based on distance or importance.
 */
