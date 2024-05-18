"use strict";
/*Write a function that receives an array of names and formats them into a string
separated by commas, except for the last two names, which should be separated by "and".*/
function arrayToString(array) {
    let string = array[0];
    for (let i = 1; i < array.length; i++) {
        if (i === array.length - 1) {
            string += " and " + array[i];
        }
        else {
            string += ", " + array[i];
        }
    }
    return string;
}
let array7 = ["Shahmeer Bukahri", "Ahmad Abdullah", "Rahim Chaudhary", "Hassan Chaudhary", "Ahmad Chaudhary"];
//arrayToString(array7)
console.log(`Array to string, returned data is: ${arrayToString(array7)}`);
