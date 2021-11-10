"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fibonacci = void 0;

var fibonacci = function fibonacci(items) {
  var fibonacciSequence = [0, 1];

  for (var i = 2; i < items; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  console.log("Fibonacci Sequence with ".concat(items, " items"), fibonacciSequence);
  return fibonacciSequence;
};

exports.fibonacci = fibonacci;
fibonacci(10);
fibonacci(20);
fibonacci(30);
fibonacci(40);