const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    // console.debug(arr);
    // let maxDepth = (array) => Array.isArray(array) ? 1 + Math.max(0, ...array.map(maxDepth)) : 0;
    // return maxDepth(arr);
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        console.debug('arrI', arr[i])
        count += this.calculateDepth(arr[i]);
      }
    }
    console.debug('count', count)
    return count
  }
}

module.exports = {
  DepthCalculator,
};
