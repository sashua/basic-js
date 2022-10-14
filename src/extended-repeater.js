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
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  str = String(str);
  if (addition !== undefined) {
    addition = String(addition);
  }

  const chunks = [];
  for (let i = 0; i < repeatTimes; i++) {
    chunks.push(str);
    if (addition !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        chunks.push(addition);
        if (j < additionRepeatTimes - 1) {
          chunks.push(additionSeparator);
        }
      }
    }
    if (i < repeatTimes - 1) {
      chunks.push(separator);
    }
  }
  return chunks.join("");
}

module.exports = {
  repeater,
};
