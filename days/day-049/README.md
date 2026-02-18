# day 49 filtering modes

today is about **texture filtering modes**.

filters control how a texture is sampled when:
- it is minified (smaller on screen)
- it is magnified (larger on screen)

three js gives you separate controls:
- `texture.minFilter`
- `texture.magFilter`

goal:
- understand min vs mag filters
- understand nearest vs linear
- choose filters for pixel art vs smooth textures

## runnable demo

a demo exists in `days/day-049/demo`.

with vite:
- `npm run dev`
- open `/days/day-049/demo/index.html`
