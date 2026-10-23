'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0

  const addition = (a) => {
    if(a === undefined) {
      return sum
    }
    sum += a
    return addition
  }

  return addition
}

module.exports = makeInfinityAdder;
