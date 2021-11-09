"use strict";

/**
 * Display the fibonacci sequence to console with the number of items
 */
var fibonacci = function fibonacci(items) {
  var fibonacciSequence = [0, 1];

  for (var i = 2; i < items; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  return fibonacciSequence;
};

test('return items list of fibonacci number ', function () {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});