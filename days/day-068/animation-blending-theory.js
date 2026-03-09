// day 68 — animation blending theory

/**
 * The Weight System
 * 
 * Every `AnimationAction` in Three.js has a `.weight` property.
 * This weight (0.0 to 1.0) dictates how much those specific keyframe tracks
 * deform the bones relative to other active actions.
 * 
 * 1. Normalized Blending:
 *    - The sum of weights for all actions affecting a bone usually equals 1.0.
 *    - Example: 0.7 Walk + 0.3 Run = A fast walk.
 * 
 * 2. Crossfading:
 *    - A crossfade is simply the simultaneous `fadeOut` of the current action
 *      and the `fadeIn` of the target action.
 *    - `crossFadeTo` handles the timing and weight ramp for you.
 * 
 * 3. Warp:
 *    - When crossfading between clips of different lengths (e.g., 2s Walk and 1s Run),
 *      'warping' scales the time to match them during the transition to avoid foot-sliding.
 */

console.log('blending turns discrete clips into continuous motion.');
