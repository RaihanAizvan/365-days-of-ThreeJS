// day 70 — lerp utility basics

/**
 * lerp (linear interpolation)
 * 
 * formula: current + (target - current) * alpha
 * 
 * alpha (0.0 to 1.0) controls the 'smoothness'.
 * lower alpha = smoother/slower transition.
 */

let currentscrolly = 0;
let targetscrolly = 0;

window.addEventListener('scroll', () => {
    targetscrolly = window.scrolly;
});

// usage in tick loop:
// currentscrolly += (targetscrolly - currentscrolly) * 0.1;

console.log('lerp is the secret sauce for premium-feeling camera movement.');
