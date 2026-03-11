// day 70 — scroll logic theory

/**
 * mapping scroll to 3d space
 * 
 * 1. normalized scroll:
 *    - to use scroll in formulas, we usually normalize it:
 *    - `const scrollratio = window.scrolly / (document.body.scrollheight - window.innerheight)`
 *    - this gives a value from 0.0 top to 1.0 bottom.
 * 
 * 2. section mapping:
 *    - for multi-section sites, we often want to know which section is active.
 *    - `const section = math.round(window.scrolly / window.innerheight)`
 * 
 * 3. parallax:
 *    - moving background objects slower and foreground objects faster relative to the scroll.
 *    - `object.position.y = - (window.scrolly * 0.05)`
 * 
 * 4. smoothing (lerp):
 *    - direct mapping feels mechanical. 
 *    - we use a target value and slowly move the actual value towards it every frame.
 */

console.log('scroll is just another input axis for your 3d camera.');
