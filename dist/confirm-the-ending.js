"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = confirmEnding;

function confirmEnding(str, target) {
  var targetLength = target.length;
  str = str.slice(-targetLength) === target;
  console.log(str);
  return str;
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
confirmEnding("Connor", "n");