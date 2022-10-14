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
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this._convert(message, key, true);
  }

  decrypt(message, key) {
    return this._convert(message, key, false);
  }

  _convert(message, key, isDirect = true) {
    this._checkArgs(message, key);

    const codeA = "A".charCodeAt(0);
    const codeZ = "Z".charCodeAt(0);

    const messageCodes = message
      .toUpperCase()
      .split("")
      .map((char) => char.charCodeAt(0));

    const keyShifts = key
      .toUpperCase()
      .split("")
      .map((char) => char.charCodeAt(0) - codeA);

    let keyIndex = 0;
    let newCodes = messageCodes.map((code) => {
      if (code < codeA || code > codeZ) {
        return code;
      }
      const shift = keyShifts[keyIndex];
      keyIndex = ++keyIndex % keyShifts.length;
      const newCode = code + (isDirect ? shift : -shift);
      if (newCode < codeA) {
        return newCode - codeA + codeZ + 1;
      }
      if (newCode > codeZ) {
        return (newCode % codeZ) - 1 + codeA;
      }
      return newCode;
    });

    if (!this.isDirect) {
      newCodes = newCodes.reverse();
    }

    return newCodes.map((code) => String.fromCharCode(code)).join("");
  }

  _checkArgs(...args) {
    console.log(args);
    if (args.some((a) => a === undefined)) {
      throw Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
