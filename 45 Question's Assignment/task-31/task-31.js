"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let user = ["Shahmeer", "Ali", "Rahim", "Ahmad"];
function check(user) {
    if (user.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        console.log("Not empty!");
    }
}
check(user);
let len = user.length;
for (let i = 0; i < len; i++) {
    user.pop();
}
check(user);
