//Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1
function searchElement(array: number[], number: number){
    for(let i = 0; i < array.length; i++){
        if(number === array[i]){
            return i
        }
    }
    return -1
}
let elementsArray: number[] = [1, 2, 3, 4, 5, 6, 7]
let search: number = 3
let result1: number = searchElement(elementsArray, search)
console.log(`Arrays is: ${elementsArray}`)
if(result1 === -1){
    console.log(`Element ${search} not found in the Array!`)
} else{
    console.log(`Element ${search} fount at index ${result1}!`)
}