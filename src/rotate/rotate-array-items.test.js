// Given an array, rotate the array to the right by k steps, where k is non-negative.
import rotateArrayItems from './rotate-array-items';
import {rotateArrayItems2} from './rotate-array-items';

describe("should rotate array items by K step", () => {
    it("should rotate array items by K step", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        const expected = [5, 6, 7, 1, 2, 3, 4];
        rotateArrayItems(arr, k);
        expect(arr).toEqual(expected);
    });

    it("should rotate array items by K step", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        const expected = [5, 6, 7, 1, 2, 3, 4];
        rotateArrayItems2(arr, k);
        expect(arr).toEqual(expected);
    });
    
})