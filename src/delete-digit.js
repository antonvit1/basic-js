const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n)
  let str2 = '';
  let numb = 0;
  for(let i = 0; i < str.length; i++){

if (Number(str.slice(0,i) + str.slice(i + 1)) > numb){
  console.debug(str, (str.slice(0,i) + str.slice(i + 1)))
  numb = Number(str.slice(0,i) + str.slice(i + 1));
}

  }

  return numb;
}

module.exports = {
  deleteDigit
};
