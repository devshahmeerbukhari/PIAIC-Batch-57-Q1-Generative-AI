"use strict";
/*Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Calculator
const inquirer_1 = __importDefault(require("inquirer"));
const calculate_js_1 = require("./components/calculate.js");
const question = await inquirer_1.default.prompt([
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
    (0, calculate_js_1.addition)(question.operand1, question.operand2);
}
else if (question.operator === '-') {
    (0, calculate_js_1.subtraction)(question.operand1, question.operand2);
}
else if (question.operator === '*') {
    (0, calculate_js_1.multiplication)(question.operand1, question.operand2);
}
else if (question.operator === '/') {
    (0, calculate_js_1.division)(question.operand1, question.operand2);
}
