/**
 * dt smoothing patterns
 */

/**
 * pattern 1: clamp only
 *
 * simplest and most common.
 */

/**
 * pattern 2: clamp + exponential smoothing
 *
 * let smooth = 1/60
 * smooth = smooth + (dt - smooth) * alpha
 *
 * alpha around 0.1..0.3 is typical.
 */

/**
 * pattern 3: fps averaging
 *
 * store last N dt values and average them.
 * more stable, but more memory and more lag.
 */

/**
 * warning
 *
 * smoothing dt can make input feel "mushy".
 * for player controls, you often want raw dt (with clamp),
 * and maybe smooth only camera motion.
 */
