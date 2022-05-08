// @ts-check

/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * The number of minutes it takes to cook the lasagna.
 */
export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Zero minutes.
 */
const ZERO_MINUTES = 0;

/**
 * Determines the number of minutes the lasagna still needs to remain
 * in the oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  let remainingMinutes = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  return (remainingMinutes < ZERO_MINUTES) ? ZERO_MINUTES : remainingMinutes;
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Calculates the total working time. That is, the time to prepare all
 * the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
