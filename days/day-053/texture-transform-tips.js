/**
 * texture transformation tips
 */

/**
 * offset is useful for animating textures.
 * 
 * texture.offset.x += delta * scrollSpeed
 */

/**
 * always set center before rotating.
 * 
 * otherwise rotation happens around (0, 0).
 */

/**
 * combine with repeat for tiled patterns.
 * 
 * texture.repeat.set(4, 4)
 * texture.offset.x += delta * 0.1
 */

/**
 * use offset for atlas sprites.
 * 
 * texture.repeat.set(1/cols, 1/rows)
 * texture.offset.set(col/cols, row/rows)
 */
