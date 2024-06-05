"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
let friendsForDinner2 = ["Abdullah", "Rahim", "Muhamman", "Taiyab"];
//Adding element at thr start of the array:
friendsForDinner2 = ["Ahmed", ...friendsForDinner2];
//Adding element at the mid of thr array:
friendsForDinner2.splice(friendsForDinner2.length / 2, 0, "Faizan");
//Adding element at the end of the array:
//we can not use append method in array, so we will use push method
friendsForDinner2.push("Azlan");
friendsForDinner2.forEach((friend) => {
    console.log(`${friend}, I Invited you for a Dinner!`);
});
