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
