/**
 * day 18 - scale transformations
 */

/**
 * scale
 *
 * object.scale is a Vector3.
 * - scale (1, 1, 1) means "original size"
 * - scale (2, 2, 2) doubles size in all directions
 * - scale (2, 1, 1) stretches in X only (non-uniform scale)
 */

/**
 * inherited scale
 *
 * if a parent is scaled, the child is scaled too.
 *
 * example:
 * parent.scale.set(2, 2, 2)
 * child.position.set(1, 0, 0)
 *
 * the child's world position ends up 2 units away in X (because the parent's scale affects it).
 */

/**
 * non-uniform scale and normals
 *
 * lighting depends on normals.
 *
 * non-uniform scaling changes the geometry and must also adjust normals.
 * three js computes a normalMatrix (inverse-transpose of modelView) to handle this.
 *
 * takeaway:
 * - non-uniform scale is allowed
 * - but it can make things look "weird" if you expected uniform shading
 */

/**
 * negative scale (mirroring)
 *
 * scale(-1, 1, 1) mirrors geometry.
 *
 * side effects:
 * - can flip triangle winding order
 * - can cause backface culling issues (faces disappear)
 *
 * fixes:
 * - set material.side = THREE.DoubleSide (debug / special cases)
 * - or fix geometry / avoid negative scale
 */

/**
 * practical tips
 *
 * - prefer uniform scale when possible
 * - avoid scaling a parent when you mean to change a child offset
 * - be careful scaling physics/collision proxies (later)
 */
