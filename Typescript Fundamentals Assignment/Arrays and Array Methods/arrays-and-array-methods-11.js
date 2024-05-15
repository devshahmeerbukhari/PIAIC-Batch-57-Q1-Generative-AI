"use strict";
//Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
let arr = ["Hello", "Azlan", "Shahmeer", "Ahmad"];
let newArray = arr.filter((element) => { return element[0] === 'A'; });
console.log(newArray);
