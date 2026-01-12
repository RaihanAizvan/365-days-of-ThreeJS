# day 12 project tooling

today is about the boring stuff that makes learning (and shipping) easier.

we are not adding a full build system yet.
we just want a repeatable way to:
- run demos locally (without `file://` issues)
- debug rendering problems
- measure performance
- avoid common workflow traps

goal:
- understand why a local server is required for ES modules
- learn a minimal dev loop for this repo
- know which browser tools matter for three js
