/*Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.*/

//Basic Calculator
import inquirer from "inquirer"
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
])
//console.log(`Question: ${question}`)
let num1: number = question.operand1
let num2: number = question.operand2
if(question.operator === '+'){
    console.log(`Addition -> ${num1} + ${num2} is: ${num1 + num2}`)
} else if(question.operator === '-'){
    console.log(`Subtraction -> ${num1} - ${num2} is: ${num1 - num2}`)
} else if(question.operator === '*'){
    console.log(`Multiplication -> ${num1} * ${num2} is: ${num1 * num2}`)
} else if(question.operator === '/'){
    console.log(`Division -> ${num1} / ${num2} is: ${num1 / num2}`)
}
