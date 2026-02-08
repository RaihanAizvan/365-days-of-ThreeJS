/**
 * day 39 - debugging ui
 */

/**
 * why debugging UI
 *
 * - tweak values without recompiling
 * - understand cause/effect quickly
 * - inspect boundaries (min/max)
 */

/**
 * common controls
 *
 * - sliders for numeric values (e.g., light intensity)
 * - color pickers
 * - checkboxes for toggles
 */

/**
 * keep it separate
 *
 * do not put UI logic inside rendering logic.
 * use UI to update a small state object, and let the loop read it.
 */
