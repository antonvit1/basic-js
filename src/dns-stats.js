const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let count = 0;
  let arr = Array.from(
    new Set(
      domains
        .map((el) => {
          return el.split(".").map((val, index, arr) => {
            if (index === 0) {
              return el;
            } else if (index === arr.length - 1) {
              return val;
            } else {
              return val + "." + arr[index + 1];
            }
          });
        })
        .flat()
    )
  );

  if (domains.length === 0) {
    return obj;
  }
  let k = "";
  for (let i = 0; i < arr.length; i++) {
    domains.forEach((url) => {
      if (url.includes(arr[i])) {
        k = "." + arr[i].split(".").reverse().join(".");
        if (obj.hasOwnProperty(k)) {
          obj[k] += 1;
        } else {
          obj[k] = 1;
        }
      }
    });
  }
  console.debug(obj);
  return obj;
}

module.exports = {
  getDNSStats,
};
