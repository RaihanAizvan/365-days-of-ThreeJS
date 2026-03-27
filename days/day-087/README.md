# day 87 particle basics

today is about **Particle Basics** and stepping into the raw power of `THREE.Points`.

until now, we have rendered geometry as solid objects connected by faces (triangles). but what if we want to render rain, snow, stars, or a galaxy? rendering 100,000 individually modeled snowflakes with `THREE.Mesh` would instantly crash the browser.

key topics:
- **`THREE.Points`**: an entirely different class of 3D object designed specifically for rendering millions of detached dots.
- **PointsMaterial**: the unique material required to render vertices as flat, camera-facing squares (particles) instead of solid faces.
- **vertex-level rendering**: understanding that particles are simply the raw points (vertices) of a geometry, stripped of their connecting lines and faces.

goal:
- understand the performance necessity of point-based rendering for massive quantities.
- instantiate a `THREE.Points` object instead of a `THREE.Mesh`.
- use a standard geometry (like a Sphere or Box) to spawn particles at its vertices.

## runnable demo

a demo exists in `days/day-087/demo`.

with vite:
- `npm run dev`
- open `/days/day-087/demo/index.html`
