/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/




let friendsForDinner3: string[] = ["Abdullah", "Rahim", "Muhamman", "Taiyab"]
//Adding element at thr start of the array:
friendsForDinner3 = ["Ahmed", ...friendsForDinner3]
//Adding element at the mid of thr array:
friendsForDinner3.splice(friendsForDinner3.length/2, 0, "Faizan")
//Adding element at the end of the array:
//we can not use append method in array, so we will use push method
friendsForDinner3.push("Azlan")
console.log("You can invite only two people for dinner")
while(true){
    if(friendsForDinner3.length === 2){
        break;
    }   else{
        console.log(`We’re sorry ${friendsForDinner3.pop()}, we can’t invite you for a dinner`)
    }
}
friendsForDinner3.forEach((friend) => {
    console.log(`${friend}, I Invited you for a Dinner!`)
})