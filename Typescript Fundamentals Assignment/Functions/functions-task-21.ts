//Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(array: number[]){
    /*var result = array[0]
    for(let i = 1; i < array.length; i++){
        result *= array[i] 
    }
    return result*/

    /*Here using reduce function, reduce funtion is used when you want single or reduced output 
    For Example, sum of the array, product of the array or occurence of any word in an array*/
    return array.reduce((accumulator, currentValue) => accumulator *= currentValue, 1)
}
let array1: number[] = [1, 2, 3, 4]
console.log(`Product of array [${array1}] is: ${calculateProduct(array1)}`)