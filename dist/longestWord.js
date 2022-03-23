"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = findLongestWordLength;

function findLongestWordLength(str) {
  var initialSize = 0;
  var wordArray = str.split(" ");

  for (var i = 0; i < wordArray.length; i++) {
    if (initialSize < wordArray[i].length) {
      initialSize = wordArray[i].length;
    }
  }

  return initialSize;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");