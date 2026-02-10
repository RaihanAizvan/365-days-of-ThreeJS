/**
 * day 41 - parameter mapping
 */

/**
 * linear mapping
 *
 * value in [0, 1] -> range [min, max]
 *
 * lerp(min, max, t)
 */

/**
 * inverse lerp
 *
 * given value in [min, max], return t in [0, 1]
 *
 * t = (value - min) / (max - min)
 */

/**
 * clamp
 *
 * always clamp inputs to prevent surprises.
 */

/**
 * non-linear mapping
 *
 * sometimes linear feels wrong.
 * example: map slider to exponential scale.
 */

// const exp = Math.pow(t, 2) // ease-in
// const value = lerp(min, max, exp)
