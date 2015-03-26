"use strict";

module.exports = alphanumeric;

function alphanumeric(_x2) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    _again = false;
    var num = _x2;
    res = allowed = random = undefined;
    var res = _arguments[1] === undefined ? "" : _arguments[1];

    if (!num) {
      return res;
    }var allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        random = (Math.random() * (allowed.length - 1)).toFixed();

    _arguments = [_x2 = num - 1, res + allowed[random]];
    _again = true;
    continue _function;
  }
}