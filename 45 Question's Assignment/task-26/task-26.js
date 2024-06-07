"use strict";
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color2 = "Green";
function check(alien_color) {
    if (alien_color.toLowerCase() === "green") {
        console.log("You have earned 5 points");
    }
    else {
        console.log("You have earned 10 points");
    }
}
check(alien_color2);
alien_color2 = "Yellow";
check(alien_color2);
