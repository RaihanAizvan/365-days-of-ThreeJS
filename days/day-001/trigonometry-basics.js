/**
 * trigonometry in graphics
 *
 * sine and cosine are used to describe circular motion
 * they help us move objects in smooth curves instead of straight lines
 *
 * this is used in rotations orbits waves and oscillations
 * almost every smooth animation in graphics depends on this idea
 */

/**
 * angle
 *
 * angle represents how far we have rotated around a circle
 *
 * in programming angles are measured in radians not degrees
 * pi represents half a circle
 *
 * pi divided by four represents a quarter rotation
 */
const angle = Math.PI / 4

/**
 * circular position
 *
 * cosine gives the horizontal position on a circle
 * sine gives the vertical position on a circle
 *
 * together they describe a point moving around a circle
 *
 * as angle changes this position moves smoothly
 */
const circularPosition = {
  x: Math.cos(angle),
  y: Math.sin(angle),
  z: 0
}

/**
 * how this connects to graphics
 *
 * changing the angle over time creates motion
 * this is how rotating planets bouncing waves and camera orbits work
 *
 * increasing angle slowly makes smooth animation
 * decreasing angle reverses direction
 */

/**
 * relation to three js
 *
 * three js already uses this math internally
 *
 * vector3 stores position direction and movement
 * position add moves objects
 * camera lookat uses direction math
 *
 * three js is a wrapper around these ideas
 * understanding this removes the feeling of magic
 * and gives control over motion
 */
