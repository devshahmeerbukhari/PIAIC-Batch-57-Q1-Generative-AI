"use strict";
/*Develop a function that takes two inputs, a string and a character,
and returns the number of times the character appears in the string.*/
function occuranceCountOfACharacter(string, targetChar) {
    /*First Solution
    let count = 0
    for(let char of string){
        if(char === targetChar){
            count++
        }
    }
    return count*/
    /*Second Solution*/
    //console.log(`Typeof: ${typeof(string.split(targetChar))}`)
    return string.split(targetChar).length - 1;
    /*split function split the string according to the given target method, in my case i split the string
    with 'a' character, and then this split function returns the object array..
    However in my case i am returning the length of object array - 1, it means it will first
    slipt the string and then counting the length of the resultant obj array will return me the
    occurance of that specific character*/
}
let string = "Muhammad Shahmeer Bukhari";
let targetChar = "a";
let result1 = occuranceCountOfACharacter(string, targetChar);
console.log(`'${targetChar}' character occured ${result1} time in string: ${string}`);
