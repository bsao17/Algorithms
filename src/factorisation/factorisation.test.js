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

import factorialize from "./factorisation";


test("a number factorisation", () => {
  expect(factorialize(5)).toBe(120);
});
test("a number factorisation", () => {
  expect(factorialize(10)).toBe(3628800);
});
test("a number factorisation", () => {
  expect(factorialize(20)).toBe(2432902008176640000);
});
test("a number factorisation", () => {
  expect(factorialize(0)).toBe(1);
});
