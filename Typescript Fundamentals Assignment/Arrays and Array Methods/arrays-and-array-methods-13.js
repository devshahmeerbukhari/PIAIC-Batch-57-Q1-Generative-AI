"use strict";
//arrays-and-array-methods-13.js
//Develop a function that takes an array of numbers and returns a new array with each number squared.
function makeSqrOfArraysElement(array) {
    return array.map((element) => {
        return (element * element);
    });
}
let array = [1, 2, 3, 4, 5, 6];
console.log(`Original array: ${array}`);
array = makeSqrOfArraysElement(array);
console.log(`Updated Array: ${array}`);
