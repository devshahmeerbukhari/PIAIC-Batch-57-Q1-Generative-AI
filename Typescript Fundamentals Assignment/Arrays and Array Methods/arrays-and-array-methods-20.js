"use strict";
//Write a function to find and return the smallest number in an array of integers.
function findSmallestElement(array) {
    let smallest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (smallest > array[i]) {
            smallest = array[i];
        }
    }
    return smallest;
}
let arrayElements = [1, 2, 6, 4, 3, -1, 5, 6, -138, 34, 543, 138];
console.log(`Array is: ${arrayElements}`);
console.log(`Smallest Element in the array is: ${findSmallestElement(arrayElements)}`);
