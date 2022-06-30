// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0
  switch (name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer' || 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    default:
      time = 2.5;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesPotential = 0;

  while (wedgesPotential < wedgesNeeded) {
    let lime = limes.pop();
    console.log(limes.length)
    console.log(limes[0])
    console.log(limes.pop())

    if (lime === 'small') {
      wedgesPotential += 6;
    } else if (lime === 'medium') {
      wedgesPotential += 8;
    } else if (lime === 'large') {
      wedgesPotential += 10;
    }
  }

  return wedgesPotential;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error('Please implement the remainingOrders function');
}
