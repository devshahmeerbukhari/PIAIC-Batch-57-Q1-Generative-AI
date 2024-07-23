"use strict";
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy
of the array of magicians’ names. Because the original array will be unchanged, return the new array and
store it in a separate array. Call show_magicians() with each array to show that you have one array of the
original names and one array with the Great added to each magician’s name.*/
function make_great(magician) {
    return magician.map((element) => {
        return "Great, " + element;
    });
}
function show_magicians(magician) {
    console.log("Magicians are: ");
    magician.forEach(element => {
        console.log(element);
    });
}
let magician = ["Magician-1", "Magician-2", "Magician-3", "Magician-4"];
let array1 = make_great(magician);
console.log("Original Array: ");
show_magicians(magician);
console.log("New Array: ");
show_magicians(array1);
