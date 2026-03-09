// day 68 — crossfading basics

import * as THREE from 'three';

/**
 * Common Blending Commands
 */

// 1. start an action with zero weight and fade it in
// toAction.reset();
// toAction.setEffectiveWeight(1);
// toAction.fadeIn(duration);
// toAction.play();

// 2. fade out an existing action
// fromAction.fadeOut(duration);

// 3. combined crossfade
// fromAction.crossFadeTo(toAction, duration, true);

// important: 
// actions must be 'enabled' and 'playing' for weight changes to have visual effect.
// reset() is used to start the animation time from 0.
