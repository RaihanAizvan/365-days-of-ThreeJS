/**
 * grouping anti-patterns
 */

/**
 * anti-pattern: deep hierarchy without meaning
 *
 * if your nesting doesn't represent a real relationship,
 * it becomes confusing and hard to debug.
 */

/**
 * anti-pattern: scaling a high-level parent
 *
 * scaling the root of an object will:
 * - scale children
 * - scale child offsets
 * - potentially affect physics later
 *
 * prefer scaling only the visual mesh.
 */

/**
 * anti-pattern: per-frame add/remove
 *
 * adding/removing many objects every frame can be expensive.
 * prefer toggling visibility or pooling objects.
 */
