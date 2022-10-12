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
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  let control = null;
  let isDiscarded = false;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    switch (item) {
      case "--discard-next":
      case "--double-next":
        control = item;
        continue;
      case "--discard-prev":
      case "--double-prev":
        control = item;
        break;
      default:
        result.push(item);
        isDiscarded = false;
    }
    item = result.at(-1);
    switch (control) {
      case "--discard-next":
        result.pop();
        isDiscarded = true;
        break;
      case "--discard-prev":
        if (!isDiscarded) {
          result.pop();
        }
        break;
      case "--double-next":
      case "--double-prev":
        if (item && !isDiscarded) {
          result.push(item);
        }
        break;
    }
    control = null;
  }
  return result;
}

module.exports = {
  transform,
};
