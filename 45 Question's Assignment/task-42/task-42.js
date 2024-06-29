"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log("Before Adding great: ");
show_magicians(magician);
magician = make_great(magician);
console.log("After Adding great: ");
show_magicians(magician);
