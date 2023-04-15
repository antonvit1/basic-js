const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",
  getLength() {
    this.chain.split("~~").length;
  },
  addLink(value) {
    let str = ''
    for (let i = 0; i < this.chain.split("~~").length; i++) {
     this.chain = `~~(${value})`;

      str = this.chain
      console.debug(this.chain.split("~~"));
    }
  },
  removeLink(position) {
    this.chain(position);
    console.debug(this.position);
  },
  reverseChain() {},
  finishChain() {
    return this.chain(this.chain.split("~~").length);
  },
};

module.exports = {
  chainMaker,
};
