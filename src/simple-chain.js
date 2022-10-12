const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _values: [],

  getLength() {
    return this._values.length;
  },
  addLink(value) {
    this._values.push(value);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.getLength()
    ) {
      this._values.length = 0;
      throw Error("You can't remove incorrect link!");
    }
    this._values.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._values.reverse();
    return this;
  },
  finishChain() {
    const result = this._values
      .map((value) => `( ${value === undefined ? "" : value} )`)
      .join("~~");
    this._values.length = 0;
    return result;
  },
};

module.exports = {
  chainMaker,
};

// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4);
let result = chainMaker
  .addLink("GHI")
  .addLink(null)
  .reverseChain()
  .addLink(333)
  .reverseChain()
  .reverseChain()
  .addLink(0)
  .reverseChain()
  .reverseChain()
  .addLink("GHI")
  .finishChain();

console.log(result);
