"use strict";
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(`Number is: ${i}, Fizz!`);
    }
    else if (i % 5 === 0) {
        console.log(`Number is: ${i}, Buzz!`);
    }
    else {
        console.log(`Number is: ${i}!`);
    }
}
