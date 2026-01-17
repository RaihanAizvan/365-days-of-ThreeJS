/**
 * day 17 - object positioning
 */

/**
 * position
 *
 * object.position is a Vector3 in local space (relative to parent).
 *
 * common patterns:
 * - object.position.set(x, y, z)
 * - object.position.x += 1
 */

/**
 * rotation
 *
 * object.rotation is an Euler (radians).
 * - rotation order matters (default is 'XYZ')
 * - radians, not degrees
 *
 * shortcuts:
 * - Math.PI = 180 degrees
 * - Math.PI / 2 = 90 degrees
 */

/**
 * quaternion
 *
 * under the hood, three js uses quaternions for rotation.
 * you usually don't need to touch them until you do advanced stuff.
 */

/**
 * scale
 *
 * object.scale is a Vector3.
 * scale is also inherited from parents.
 */

/**
 * local vs world space
 *
 * object.position is local.
 * to get world position, use:
 * - object.getWorldPosition(targetVector)
 */

/**
 * translateX/Y/Z
 *
 * translate methods move the object in its *local axes*.
 *
 * example:
 * - rotate an object 90 degrees
 * - translateZ(1)
 * it will move "forward" in its rotated direction.
 */

/**
 * lookAt
 *
 * object.lookAt(target) rotates the object so its -Z axis points at target.
 * useful for cameras and directional objects.
 */
