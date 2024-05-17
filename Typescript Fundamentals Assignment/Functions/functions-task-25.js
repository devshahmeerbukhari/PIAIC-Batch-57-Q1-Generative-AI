"use strict";
//Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(array) {
    return array.reduce((accumulator, selectedElement) => {
        if (!accumulator[selectedElement])
            accumulator[selectedElement] = 1;
        else
            accumulator[selectedElement]++;
        return accumulator;
    }, {});
}
let array5 = [1, 2, 3, 4, 3, 2, 1, 2, 3, 2, 2, 2, 3, 4, 5, 6];
console.log("Occurance of each element is: ", countOccurrences(array5));
