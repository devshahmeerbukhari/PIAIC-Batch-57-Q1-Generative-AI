"use strict";
/*Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.*/
let friendsArr = ["Muhaman", "AHmad", "Abdullah", "Taiyab", "Rahim"];
console.log("My Friends are: ");
for (let i = 0; i < friendsArr.length; i++) {
    if (i === friendsArr.length - 1) {
        console.log("and " + friendsArr[i]);
    }
    else {
        console.log(friendsArr[i] + ", ");
    }
}
