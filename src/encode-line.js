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
  let num = 0;
  let char = "";
  let result = "";

  str.split("").forEach((c) => {
    if (!num) {
      num = 1;
      char = c;
    } else if (char === c) {
      num += 1;
    } else {
      result += (num > 1 ? num : "") + char;
      num = 1;
      char = c;
    }
  }, "");
  return result + (num > 1 ? num : "") + char;
}

module.exports = {
  encodeLine,
};
