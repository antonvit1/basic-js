const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else if (!arr.length) {
    return [];
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (
        (arr[i] === "--discard-next" && arr[i + 2] === "--double-prev") ||
        (arr[i] === "--discard-next" && arr[i + 2] === "--discard-prev")
      ) {
        i += 3;
      }
      if (
        arr[i] !== "--discard-prev" &&
        arr[i] !== "--discard-next" &&
        arr[i] !== "--double-prev" &&
        arr[i] !== "--double-next"
      ) {
        newArr.push(arr[i]);
      }

      if (arr[i] === "--discard-prev" && i !== 0) {
        newArr.pop();
      }
      if (arr[i] === "--double-prev" && i !== 0) {
        newArr.push(arr[i - 1]);
      }

      if (arr[i] === "--double-next" && i !== arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
      if (arr[i] === "--discard-next" && i !== arr.length - 1) {
        newArr.splice(i + 1, 1);
      }
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
