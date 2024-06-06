"use strict";
/*Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.*/
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 4, 5];
//arr[0] = "Hello"
//Error: You can not assign string to number
arr[0] = 10;
console.log(arr);
