"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let friendsForDinner1 = ["Abdullah", "Rahim", "Muhamman", "Taiyab"];
friendsForDinner1.forEach((friend) => {
    console.log(`${friend}, I Invited you for a Dinner!`);
});
let notComingFriend = "Abdullah";
console.log(`${notComingFriend} is not coming!`);
let indexOf = friendsForDinner1.indexOf(notComingFriend);
friendsForDinner1[indexOf] = "Azlan";
console.log("New List!");
friendsForDinner1.forEach((friend) => {
    console.log(`${friend}, I Invited you for a Dinner!`);
});
