const { NotImplementedError } = require("../extensions/index.js");

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
  const countChars = (str) => {
    const counts = {};
    for (char of str) {
      counts[char] = (counts[char] ?? 0) + 1;
    }
    return counts;
  };

  const counts1 = countChars(s1);
  const counts2 = countChars(s2);

  return Object.keys(counts1).reduce(
    (acc, key) => acc + Math.min(counts1[key] ?? 0, counts2[key] ?? 0),
    0
  );
}

module.exports = {
  getCommonCharacterCount,
};
