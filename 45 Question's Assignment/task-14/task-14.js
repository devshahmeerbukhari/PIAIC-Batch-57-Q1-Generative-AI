"use strict";
/*Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people
you’d like to invite to dinner. Then use your list to print a message
to each person, inviting them to dinner.*/
Object.defineProperty(exports, "__esModule", { value: true });
let friendsForDinner = ["Abdullah", "Rahim", "Muhamman", "Taiyab"];
friendsForDinner.forEach((friend) => {
    console.log(`${friend}, I Invited you for a Dinner!`);
});
exports.default = friendsForDinner;
