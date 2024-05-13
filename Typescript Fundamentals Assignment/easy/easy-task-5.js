"use strict";
var number = 5;
function greaterThanFive(number) {
    if (number > 3) {
        console.log(`Yes, number ${number} is greater than 3!`);
    }
    else {
        console.log(`No, number ${number} is not greater than 3!`);
    }
}
greaterThanFive(number);
number = 2;
greaterThanFive(number);
