"use strict";

// Language: javascript
// Path: longestWord\longestWord.test.js

/** Find the longest word in a string */
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
/**Function test with Jest */

test('shoFind the longest word in a stringuld ', function () {
  expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
});