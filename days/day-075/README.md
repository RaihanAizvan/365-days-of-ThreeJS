# day 75 spot cone

today is about **SpotLights** and their unique cone-shaped illumination.

a spot light is like a flashlight or a theatrical stage light. it has a position and a direction (like a directional light), but its light is restricted to a specific angle, creating a cone.

key topics:
- **Angle**: the maximum extent of the cone (in radians).
- **Penumbra**: the softness of the light's edge (0.0 to 1.0).
- **Target**: like directional lights, spot lights point at a target object in the scene.
- **Decay & Distance**: behaves identically to point lights inside the cone.

goal:
- understand the mathematical parameters that define a spot light's cone.
- use the `penumbra` property to create soft, realistic edges.
- build a "stage" scene illuminated by moving spotlights.

## runnable demo

a demo exists in `days/day-075/demo`.

with vite:
- `npm run dev`
- open `/days/day-075/demo/index.html`
