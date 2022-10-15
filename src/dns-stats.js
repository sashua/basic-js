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
  const getDomains = (url) => {
    return url.split(".").reduceRight((res, val) => {
      res.push(`${res.at(-1) ?? ""}.${val}`);
      return res;
    }, []);
  };

  const getCounts = (arr) => {
    return arr.reduce((res, val) => {
      res[val] = (res[val] ?? 0) + 1;
      return res;
    }, {});
  };

  return getCounts(domains.flatMap(getDomains));
}

module.exports = {
  getDNSStats,
};
