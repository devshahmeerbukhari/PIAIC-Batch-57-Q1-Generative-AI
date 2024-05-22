/*Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.*/
//Basic Calculator
import inquirer from "inquirer";
const question = await inquirer.prompt([
    {
        type: "number",
        name: "operand1",
        message: "Enter 1st number: ",
    },
    {
        type: "number",
        name: "operand2",
        message: "Enter 2nd number: ",
    },
    {
        type: "list",
        name: "operator",
        message: "Select Yout Operator: ",
        choices: ["+", "-", "*", "/"],
    },
]);
console.log(`Question: ${question}`);
