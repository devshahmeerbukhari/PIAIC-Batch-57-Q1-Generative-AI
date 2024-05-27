"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = exports.multiplication = exports.subtraction = exports.addition = void 0;
function addition(operand1, operand2) {
    console.log(`Addition -> ${operand1} + ${operand2} is: ${operand1 + operand2}`);
}
exports.addition = addition;
function subtraction(operand1, operand2) {
    console.log(`Subtraction -> ${operand1} - ${operand2} is: ${operand1 - operand2}`);
}
exports.subtraction = subtraction;
function multiplication(operand1, operand2) {
    console.log(`Multiplication -> ${operand1} * ${operand2} is: ${operand1 * operand2}`);
}
exports.multiplication = multiplication;
function division(operand1, operand2) {
    console.log(`Division -> ${operand1} / ${operand2} is: ${operand1 / operand2}`);
}
exports.division = division;
