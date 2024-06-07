"use strict";
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color3 = "Green";
function check(alien_color) {
    if (alien_color.toLowerCase() === "green") {
        console.log("You have earned 5 points");
    }
    else if (alien_color.toLowerCase() === "yellow") {
        console.log("You have earned 10 points");
    }
    else if (alien_color.toLowerCase() === "red") {
        console.log("You have earned 15 points");
    }
}
check(alien_color3);
alien_color3 = "Yellow";
check(alien_color3);
alien_color3 = "Red";
check(alien_color3);
