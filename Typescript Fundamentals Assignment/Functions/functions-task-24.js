"use strict";
//Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(array) {
    return array.map((element) => ++element);
}
let array4 = [1, 2, 3, 4, 5];
console.log(`Original Array [${array4}]`);
console.log(`Updated array after incremented by one [${incrementAll(array4)}]`);
