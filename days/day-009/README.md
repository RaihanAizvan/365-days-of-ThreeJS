# day 9 webgl context

today is about what a **webgl context** actually is

three js feels high level, but under the hood it is all drawing into a webgl context.

goal:
- understand what the context is
- how it relates to canvas
- why context loss can happen
- how three js uses it through the renderer

## runnable demo

there is a small runnable demo in `days/day-009/demo`.

to run it, you need a static file server (because ES modules do not work with `file://`).

options (pick one):
- `npx serve days/day-009/demo`
- `npx http-server days/day-009/demo`

then open the url it prints (usually `http://localhost:3000` or `http://localhost:8080`).

open devtools console to see the actual webgl context info via `renderer.getContext()`.
