const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstStringToArray = s1.split('')
  const secondStringToArray = s2.split('')

  const getCharsCount = firstStringToArray.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
  }, {})

  return secondStringToArray.reduce((count, char) => {
    if (getCharsCount[char] > 0) {
      getCharsCount[char]--
      return count + 1
    }
    return count
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};
