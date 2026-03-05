// day 64 — hdr theory

/**
 * what is HDR?
 * 
 * LDR (Low Dynamic Range): 8 bits per channel (0-255). 
 * when a pixel is "white", it's just (1, 1, 1). there is no information about HOW bright it is.
 * 
 * HDR (High Dynamic Range): Usually 16-bit or 32-bit floating point.
 * values can go far beyond 1.0. a sun pixel might have a value of 100.0.
 * 
 * why it matters for Three.js:
 * 1. PBR (Physically Based Rendering): HDR maps provide accurate light probes for materials.
 * 2. Reflections: bright spots in the environment map create sharp, realistic highlights.
 * 3. Post-processing: bloom effects are triggered by these high-intensity values.
 * 
 * file formats:
 * - .hdr (Radiance)
 * - .exr (OpenEXR)
 */

console.log('HDR theory: values above 1.0 enable realistic light transport.');
