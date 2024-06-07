"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
let favFruits = ["Mango", "Strawberry", "Apple"];
if (favFruits.some(element => element.toLowerCase() === "mango")) {
    console.log("You really like mango!");
}
if (favFruits.some(element => element.toLowerCase() === "strawberry")) {
    console.log("You really like Strawberry!");
}
if (favFruits.some(element => element.toLowerCase() === "apple")) {
    console.log("You really like Apple!");
}
if (favFruits.some(element => element.toLowerCase() === "pineapple")) {
    console.log("You really like Pineapple!");
}
else {
    console.log("Why you don't like Pineapple?");
}
