"use strict";
/*Create a function swapElements that swaps two specified indices in an array.*/
function swapElements(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    return array;
}
let array10 = [1, 2, 3, 4, 5];
console.log(`Original Array: ${array10}`);
array10 = swapElements(array10, 0, array10.length - 1);
console.log(`After swaping 1st index with last index: ${array10}`);
