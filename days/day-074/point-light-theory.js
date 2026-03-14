// day 74 — point light theory

/**
 * understanding point lights
 * 
 * 1. position and omni-directionality:
 *    - it radiates equally in all 3d directions (like a light bulb).
 * 
 * 2. distance constraint vs realistic infinite decay
 *    - if distance = 0, the light drops off infinitely (more realistic).
 *    - if distance > 0, the light intensity drops to absolutely 0 at that distance. this is less realistic but useful for optimization or stylistic choices.
 * 
 * 3. the decay parameter
 *    - mathematically, physically correct behaviour sets decay = 2.
 *    - in older three.js (before physicallyCorrectLights was default in r150), decay was 1.
 * 
 * 4. shadow maps
 *    - omnidirectional lights require a PerspectiveCamera rendering 6 times (a cubemap) for every light to map shadows properly.
 *    - this makes point light shadows the most expensive type of shadow in three.js!
 */

console.log('point light shadows cost 6x the performance of standard directional shadows.');
