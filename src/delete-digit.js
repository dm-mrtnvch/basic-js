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
  const stringifiedNumber = n.toString()
  let maxNumber = 0

  for (const digit of stringifiedNumber) {
    const withoutDigit = parseInt(stringifiedNumber.replace(digit, ''), 10)
    maxNumber = Math.max(maxNumber, withoutDigit)
  }

  return maxNumber
}

module.exports = {
  deleteDigit
};
