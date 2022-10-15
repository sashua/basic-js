const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const nums = arr.reduce((nums, n, i) => {
    if (n !== -1) {
      nums.push(n);
    }
    return nums;
  }, []);
  nums.sort((a, b) => b - a);
  return arr.map((n, i) => (n === -1 ? n : nums.pop()));
}

module.exports = {
  sortByHeight,
};
