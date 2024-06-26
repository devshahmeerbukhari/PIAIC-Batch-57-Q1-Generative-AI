"use strict";
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.*/
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magician) {
    console.log("Magicians are: ");
    magician.forEach(element => {
        console.log(element);
    });
}
const magician = ["Magician-1", "Magician-2", "Magician-3", "Magician-4"];
show_magicians(magician);
