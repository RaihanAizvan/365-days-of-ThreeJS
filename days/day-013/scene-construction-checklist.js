/**
 * scene construction checklist
 *
 * when a scene starts getting bigger, you need habits.
 */

/**
 * organization
 * - name objects: mesh.name = 'player'
 * - group related objects
 * - keep creation code in functions (createCar(), createRoom())
 */

/**
 * coordinate sanity
 * - add AxesHelper early
 * - add a GridHelper for ground
 * - put the camera somewhere obvious (0, 2, 5)
 */

/**
 * visibility sanity
 * if nothing shows:
 * - try MeshBasicMaterial (no lights needed)
 * - ensure camera near/far are correct
 * - ensure your object isn't behind the camera
 */

/**
 * performance hygiene
 * - reuse geometries/materials
 * - don't create/destroy objects every frame
 * - watch renderer.info.render.calls
 */
