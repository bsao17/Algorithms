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

const factorialize = (num) => {
  //get all integers less than or equal
  let sum;
  let integer = [];
  for (let i = 1; i <= num; i++) {
    const n = integer.push(i);
  }
  /*multiply all integers in the array and return the total product or 1 if factor 0*/
  if (num !== 0) {
    const reducer = (previousValue, currentValue) => {
      return previousValue * currentValue;
    };
    console.log(integer.reduce(reducer));
    sum = integer.reduce(reducer);
  } else {
    console.log(1);
    return (sum = 1);
  }
  return sum;
}

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
