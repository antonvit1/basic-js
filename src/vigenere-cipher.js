const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type ? "direct" : "reverse";
  }
  encrypt(mesage, keyOne) {
    let password = "";
    if (mesage === undefined || keyOne === undefined) {
      throw new Error("Incorrect arguments!");
    }
    mesage = mesage.toUpperCase();
    keyOne = keyOne.toUpperCase();
    for (let i = 0, j = 0; i < mesage.length; i++) {
      if (/[A-Z]/.test(mesage[i])) {
        let passwNumb =
          (mesage[i].charCodeAt() +
            keyOne[j % keyOne.length].charCodeAt() -
            130) %
          26;
        let passwLet = LETTERS.charAt(passwNumb);
        password += passwLet;
        j++;
      } else {
        password += mesage[i];
      }
    }
    return this.type === "direct"
      ? password
      : password.split().reverse().join();
  }

  decrypt(encryptMessage, keyTwo) {
    let str = "";
    if (encryptMessage === undefined || keyTwo === undefined) {
      throw new Error("Incorrect arguments!");
    }
    encryptMessage = encryptMessage.toUpperCase();
    keyTwo = keyTwo.toUpperCase();

    for (let i = 0, j = 0; i < encryptMessage.length; i++) {
      if (/[A-Z]/.test(encryptMessage[i])) {
        let strNumb =
          (encryptMessage[i].charCodeAt() -
            keyTwo[j % keyTwo.length].charCodeAt() +
            104) %
          26;
        let strLetter = LETTERS.charAt(strNumb);
        str += strLetter;
        j++;
      } else {
        str += encryptMessage[i];
      }
    }
    return this.type === "direct" ? str : str.split().reverse().join();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
