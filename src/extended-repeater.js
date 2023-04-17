const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { C: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let addArray = [];
  let array = [];

  addition = String(options.addition);
  str = String(str);

  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : '|';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;

  if (addition !== "undefined") {
    for (let i = 0; i < additionRepeatTimes; i++) {
      addArray[i] = addition;
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    array[i] = str;
  }

  let withAdditionSeparator = addArray.join(additionSeparator);

  result =
    array.join(withAdditionSeparator + separator) + withAdditionSeparator;
  return result;
}
module.exports = {
  repeater,
};
