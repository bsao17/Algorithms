"use strict";

/*
 * Confirm the Ending
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 */
function confirmEnding(str, target) {
  var targetLength = target.length;

  if (str.slice(-targetLength) === target) {
    str = true;
  } else {
    str = false;
  }

  console.log(str);
  return str;
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
confirmEnding("Connor", "n");
test('Confirm ending string whitout', function () {
  expect(confirmEnding("Bastian", "n")).toBe(true);
});