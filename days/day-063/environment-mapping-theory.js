/**
 * day 63 - environment mapping theory
 */

/**
 * What is an Environment Map?
 * 
 * An environment map (envMap) is a texture that represents the surroundings of an object.
 * In Three.js, CubeTextures are the primary way to represent this.
 * 
 * Each face of the cube represents a 90-degree field of view from the center of the scene.
 */

/**
 * Image-Based Lighting (IBL)
 * 
 * While standard lights (Point, Directional) provide direct illumination,
 * an environment map provides "ambient" or "reflected" illumination from the whole scene.
 * 
 * This is essential for:
 * - Mirrors / Shiny metals (Perfect reflections)
 * - PBR materials (Subtle environmental reflections for realism)
 */

/**
 * Texture Mapping Types
 * 
 * THREE.CubeReflectionMapping (Default) - Standard mirror-like reflections.
 * THREE.CubeRefractionMapping - For glass/water effects.
 */
