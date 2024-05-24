/*Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.*/
//Basic Calculator
import inquirer from "inquirer";
import { addition, subtraction, multiplication, division } from './components/calculate.js';
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
//console.log(`Question: ${question}`)
if (question.operator === '+') {
    addition(question.operand1, question.operand2);
}
else if (question.operator === '-') {
    subtraction(question.operand1, question.operand2);
}
else if (question.operator === '*') {
    multiplication(question.operand1, question.operand2);
}
else if (question.operator === '/') {
    division(question.operand1, question.operand2);
}
