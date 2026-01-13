/**
 * day 13 - scene construction
 *
 * key idea: three js uses a scene graph (tree).
 *
 * Scene (root)
 *  - Group (car)
 *     - Mesh (body)
 *     - Mesh (wheel FL)
 *     - Mesh (wheel FR)
 *     - Mesh (wheel BL)
 *     - Mesh (wheel BR)
 */

/**
 * Object3D
 *
 * almost everything in three js inherits from Object3D.
 * it has:
 * - position (Vector3)
 * - rotation (Euler)
 * - quaternion
 * - scale (Vector3)
 * - parent / children
 */

/**
 * local vs world transform
 *
 * local transform: relative to the parent.
 * world transform: final transform after parents are applied.
 *
 * if a parent moves, children move too (even if their local position is unchanged).
 */

/**
 * grouping patterns
 *
 * use groups to:
 * - move multiple meshes together
 * - keep scene organized
 * - build "prefabs" (reusable object trees)
 */

/**
 * debugging
 *
 * helpers are great when you're lost:
 * - AxesHelper shows +X (red), +Y (green), +Z (blue)
 * - GridHelper shows a ground plane
 */

/**
 * common mistakes
 *
 * - mixing up degrees/radians in rotations
 * - forgetting that a child inherits scale from parent
 * - trying to set world position by editing .position directly
 *   (you are setting local position)
 */
