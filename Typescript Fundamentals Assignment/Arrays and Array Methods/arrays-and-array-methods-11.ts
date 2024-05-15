//Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
let arr:string[] = ["Hello", "Azlan", "Shahmeer", "Ahmad"]
let newArray: string[] = arr.filter((element:string)=>{ return element[0] === 'A'})
console.log(newArray)