const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let newStr = email.split('').reverse().join('');
  let a = newStr.replace(/\@.*/, '');
let b = a.split('').reverse().join('');
  console.debug(b)
  return b;
}

module.exports = {
  getEmailDomain
};
