"use strict";
/*Develop a function filterByLength that takes an array of strings and a number n.
The function should return an array containing only the strings that are longer than n characters.*/
function filterByLength(array, numberN) {
    return array.filter((element) => element.length > numberN);
}
let array2 = ["Muhammad", "Shahmeer", "Bukhari", "Ali", "Ahmad", "Akram", "Rahim", "Hassaan"];
let n = 7;
console.log(`Array elements having length greater than ${n} are [${filterByLength(array2, n)}]`);
