/**Function test with Jest */
import findLongestWordLength from "./longestWord";

  test('shoFind the longest word in a stringuld ', () => {
    expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
  })
