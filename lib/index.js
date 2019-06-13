"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const toString62 = function toString62(num) {
  let res = '';
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  do {
    let rem = num % 62;
    num = Math.floor(num / 62);
    let z = str.substr(rem, 1);
    res = "".concat(z).concat(res);
  } while (num > 0);

  return res;
};

var _default = toString62; // module.exports = {
//     toString62: toString62
// };

exports.default = _default;