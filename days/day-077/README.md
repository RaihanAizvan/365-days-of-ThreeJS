# day 77 light decay

today is about **Light Decay** and visualizing how light intensity decreases over distance.

we've used the `decay` property in point and spot lights previously, but today we focus on comparing different decay models side-by-side to understand why `decay = 2` (the inverse-square law) is critical for physical realism.

key topics:
- **No Decay (0)**: light intensity remains constant over any distance.
- **Linear Decay (1)**: intensity decreases steadily (often used in older engines).
- **Physical Decay (2)**: intensity drops rapidly at first, then slowly fades (inverse-square).
- **Intensity Balancing**: how higher decay values require drastically higher initial intensity (`candela`) values to illuminate the same area.

goal:
- understand the mathematical difference between decay curves.
- visualize the curves using overlapping light volumes.
- reinforce the transition to physically correct lighting.

## runnable demo

a demo exists in `days/day-077/demo`.

with vite:
- `npm run dev`
- open `/days/day-077/demo/index.html`
