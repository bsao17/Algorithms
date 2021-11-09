// Language: javascript
// Path: longestWord\longestWord.test.js
/** Find the longest word in a string */

function findLongestWordLength(str) {
    let initialSize = 0
    const wordArray = str.split(" ")
    for(let i = 0; i < wordArray.length; i++){
      if(initialSize < wordArray[i].length){
          initialSize = wordArray[i].length
      }
    }
    return initialSize;
  }

  findLongestWordLength("The quick brown fox jumped over the lazy dog");


/**Function test with Jest */
  test('shoFind the longest word in a stringuld ', () => {
    expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
  })
