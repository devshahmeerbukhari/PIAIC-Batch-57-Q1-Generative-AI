"use strict";
const array = [1, 2, 5, -1, -4, -5, 2, -2, -5, 5];
let positiveNumber = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positiveNumber++;
    }
}
console.log(`Positive numbers are: ${positiveNumber}`);
