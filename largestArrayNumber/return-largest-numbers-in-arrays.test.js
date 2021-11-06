/*
 * Return Largest Numbers in Arrays
 * Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 */

function largestOfFour(arr) {
  let oneArray = arr.map((i) => {
    return Math.max(...i);
  });
  console.log(oneArray);
  return oneArray;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

test('returns an array with the highest number of each array ', () => {
  expect(largestOfFour([[4, 5, 1, 3],[13, 27, 18, 26], [32, 35, 37, 39],[1000, 1001, 857, 1]])).toEqual([5, 27, 39, 1001]);
})

