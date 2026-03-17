// day 77 — light decay theory

/**
 * understanding light decay curves
 * 
 * the 'decay' property determines how light intensity decreases as it travels from its source.
 * 
 * 1. decay = 0 (No Decay)
 *    - intensity is identical no matter how far away the object is.
 *    - highly unrealistic but useful for stylised/toon shading where you just want pure solid light.
 * 
 * 2. decay = 1 (Linear Decay)
 *    - intensity drops in a straight line relative to distance.
 *    - feels "closer" to realism than 0, but light travels too far and doesn't have a bright "core".
 * 
 * 3. decay = 2 (Physical Decay / Inverse-Square)
 *    - intensity drops rapidly right near the bulb, then fades slowly over a long distance.
 *    - this matches real-world physics (1 / distance^2).
 *    - this is why real light bulbs have high 'candela' values (e.g. 50-100) compared to older non-physical renderers which used intensities like 1.0.
 */

console.log('decay:2 requires much higher intensity values because the light falls off so sharply at the start.');
