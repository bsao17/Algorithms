"use strict";

var _factorisation = _interopRequireDefault(require("./factorisation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Return the factorial of the provided integer.
 * Factorialize a Number
 *
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 *
 * Factorials are often represented with the shorthand notation n!
 *
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 *
 * Only integers greater than or equal to zero will be supplied to the function.
 */
test("a number factorisation", function () {
  expect((0, _factorisation["default"])(5)).toBe(120);
});
test("a number factorisation", function () {
  expect((0, _factorisation["default"])(10)).toBe(3628800);
});
test("a number factorisation", function () {
  expect((0, _factorisation["default"])(20)).toBe(2432902008176640000);
});
test("a number factorisation", function () {
  expect((0, _factorisation["default"])(0)).toBe(1);
});