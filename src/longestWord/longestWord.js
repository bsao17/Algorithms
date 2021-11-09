/** Find the longest word in a string */

export default function findLongestWordLength(str) {
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