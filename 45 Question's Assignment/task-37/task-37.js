"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript. Make a large shirt and a medium shirt
with the default message, and a shirt of any size with a different message.*/
function make_shirt(size = "Large", message = "I Love TypeScript") {
    console.log(`Size is: ${size}\nMessage is: ${message}`);
}
make_shirt();
let size = "Medium";
let message = "I Don't Love TypeScript, lol";
make_shirt(size, message);
