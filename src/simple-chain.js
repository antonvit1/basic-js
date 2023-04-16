const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.chain.push(`( ${String(value)} )`);
      return this;
    } else {
      this.chain.push(`( )`);
      return this;
    }
  },
  removeLink(position) {
    if (
      position <= 0 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.filter((val, index) => position - 1 !== index);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let a = this.chain.join("~~");
    this.chain = [];
    return a;
  },
};

module.exports = {
  chainMaker,
};
