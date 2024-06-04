/*Greetings: Start with the array you used in Exercise 11, but instead of just printing 
each person’s name, print a message to them. The text of each message should be the same, 
but each message should be personalized with the person’s name.*/

let friendsArr1: string[] = ["Muhaman", "AHmad", "Abdullah", "Taiyab", "Rahim"]
let message1: string = "Hello Dear, "
for(let i = 0; i < friendsArr1.length; i++){
    console.log(message1 + friendsArr1[i])
}