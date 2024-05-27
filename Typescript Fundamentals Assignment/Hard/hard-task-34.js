"use strict";
/*Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method*/
function reverseOrder(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i] + " ");
    }
}
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Original Order of array: ${array4}`);
console.log(`Reverse Order of array: `);
reverseOrder(array4);
