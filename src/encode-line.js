const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let count = 1;
  let finalStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      if (arr[i] === arr[i - 1]) {
        count += 1;
        if (i === arr.length - 1) {
          finalStr += count + arr[i];
        }
      } else {
        if (i === arr.length - 1) {
          finalStr += (count === 1 ? "" : count) + arr[i - 1] + arr[i];
        } else  {
          finalStr += (count === 1 ? "" : count) + arr[i - 1];
          count = 1;
        }
      }
    }
  }
  return finalStr;
}

module.exports = {
  encodeLine,
};
