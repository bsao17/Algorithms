/**
 * Display the fibonacci sequence to console with the number of items
 */
import {fibonacci} from "./fibonacciSequence";

test('return items list of fibonacci number ', () => {
    expect(fibonacci(5)).toEqual([0,1,1,2,3]);
})

