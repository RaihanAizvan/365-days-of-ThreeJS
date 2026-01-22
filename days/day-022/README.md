# day 22 quaternion math

today is about **quaternions**: the rotation representation that avoids gimbal lock.

in three js, every `Object3D` ultimately stores its rotation in `object.quaternion`.

euler angles are easier to read, but quaternions are better for:
- composing rotations
- smoothly interpolating orientations
- avoiding gimbal lock

goal:
- know what a quaternion represents (rotation in 3d)
- axis-angle intuition
- composition (multiplying quaternions)
- interpolation (slerp)

## runnable demo

a demo exists in `days/day-022/demo`.

with vite:
- `npm run dev`
- open `/days/day-022/demo/index.html`
