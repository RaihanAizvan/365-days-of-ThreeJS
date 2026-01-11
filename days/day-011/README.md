# day 11 three js abstraction

today is about what three js is actually doing for you.

we already learned:
- day 8: scene / camera / renderer
- day 9: webgl context
- day 10: gpu architecture

now we connect the dots:
three js is an abstraction layer that turns a scene graph into webgl draw calls.

goal:
- understand the layers three js provides
- know which parts are "your data" vs "gpu resources"
- know where performance costs usually come from
