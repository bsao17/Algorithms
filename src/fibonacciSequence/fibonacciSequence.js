export const fibonacci = (items)=>{
    let fibonacciSequence = [0,1];
    for(let i = 2; i < items; i++){
        fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2];
    }
    console.log(`Fibonacci Sequence with ${items} items`, fibonacciSequence);
    return fibonacciSequence;
}

fibonacci(10);
fibonacci(20);
fibonacci(30);
fibonacci(40);