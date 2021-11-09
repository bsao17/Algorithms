/**
 * Display the fibonacci sequence to console with the number of items
 */

const fibonacci = (items)=>{
    let fibonacciSequence = [0,1];
    for(let i = 2; i < items; i++){
        fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2];
    }
    return fibonacciSequence;
}

test('return items list of fibonacci number ', () => {
    expect(fibonacci(5)).toEqual([0,1,1,2,3]);
})

