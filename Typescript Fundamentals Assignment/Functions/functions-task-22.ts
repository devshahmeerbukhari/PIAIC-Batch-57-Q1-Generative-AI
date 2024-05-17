/*Develop a function filterByLength that takes an array of strings and a number n.
The function should return an array containing only the strings that are longer than n characters.*/
function filterByLength(array: string[], numberN: number){
    return array.filter((element)=>element.length > numberN)
}
let array2: string[] = ["Muhammad", "Shahmeer", "Bukhari", "Ali", "Ahmad", "Akram", "Rahim", "Hassaan"]
let n: number = 7
console.log(`Array elements having length greater than ${n} are [${filterByLength(array2, n)}]`)