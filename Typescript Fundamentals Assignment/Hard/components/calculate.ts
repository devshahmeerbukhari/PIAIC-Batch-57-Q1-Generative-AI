function addition(operand1: number, operand2: number){
    console.log(`Addition -> ${operand1} + ${operand2} is: ${operand1 + operand2}`)
}
function subtraction(operand1: number, operand2: number){
    console.log(`Subtraction -> ${operand1} - ${operand2} is: ${operand1 - operand2}`)
}
function multiplication(operand1: number, operand2: number){
    console.log(`Multiplication -> ${operand1} * ${operand2} is: ${operand1 * operand2}`)
}
function division(operand1: number, operand2: number){
    console.log(`Division -> ${operand1} / ${operand2} is: ${operand1 / operand2}`)
}

export {addition, subtraction, multiplication, division}