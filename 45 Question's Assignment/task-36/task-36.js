"use strict";
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a
message that should be printed on the shirt. The function should print a sentence
summarizing the size of the shirt and the message printed on it. Call the function.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    console.log(`Size of a function is: ${size}\nMessage printed on the shirt is: ${message}`);
}
let size = 42;
let message = "Nothing is impossible!";
make_shirt(size, message);
