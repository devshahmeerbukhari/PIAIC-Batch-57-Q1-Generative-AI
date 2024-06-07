/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one 
False result for each of the following:
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

let name: string = "ShaHmeEr BUKhaRi"
//• Tests using the lower case function
console.log(`${name.toLowerCase() === 'shahmeer bukhari' ? 'Same' : 'Not Same'}`)
let num: number = 138
/*Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to*/
console.log(`${num > 100 ? `Number ${num} is greater than 100`: `Number ${num} is less than 100`}`)
console.log(`${num < 1000 ? `Number ${num} is less than 1000`: `Number ${num} is less than 1000`}`)
console.log(`${num === 1000 ? `Number ${num} is equal to 1000`: `Number ${num} is not equal to 1000`}`)
console.log(`${num === 138 ? `Number ${num} is equal to 138`: `Number ${num} is not equal to 138`}`)
//• Tests using "and" and "or" operators
console.log(`${num === 138 && name.toLowerCase() === "shahmeer bukhari" ? `Both are true` : 'Any of one or both are false'}`)
console.log(`${num === 138 || name.toLowerCase() === "Hello, G" ? `Any of one or both are true` : `Both are false`}`)

//Test whether an item is in a array
let arr: number[] = [1, 2, 3,4 ,5, 138]
console.log(`${arr.some(element => element === 138) ? `138 Found in the array`: `138 not found in the array`}`)

//• Test whether an item is not in a array
console.log(`${arr.some(element => element !== 13) ? `138 is not in the array` : `138 is in the array`}`)