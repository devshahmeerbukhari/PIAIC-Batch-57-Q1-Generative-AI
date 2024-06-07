"use strict";
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_25_1 = __importDefault(require("../task-25/task-25"));
function check(alien_color) {
    if (alien_color.toLowerCase() === "green") {
        console.log("You have earned 5 points");
    }
    else {
        console.log("You have earned 10 points");
    }
}
check(task_25_1.default);
check("Yellow");
