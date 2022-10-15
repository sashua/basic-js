const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const addSuffix = (name, names) => {
    let suffix = 0;
    return names.map((n) => (n === name ? `${n}(${++suffix})` : n));
  };

  let result = [...names];
  for (let i = 0; i < names.length; i++) {
    result = [
      ...result.slice(0, i),
      result[i],
      ...addSuffix(result[i], result.slice(i + 1)),
    ];
  }

  return result;
}

module.exports = {
  renameFiles,
};
