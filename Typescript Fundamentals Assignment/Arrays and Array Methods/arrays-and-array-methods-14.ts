//Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray(array: any[]){
    let length = array.length;
    for(let i = 0; i != length; i++){
        var temp = array[i]
        array[i] = array[length - 1]
        array[length - 1] = temp
        length--;
    }
    return array
}
let array1: any[] = [1, 2, 3, 4, 5, 6]
console.log(`Original Array: ${array1.join(' ')}`)
array1 = reverseArray(array1)
console.log(`Reversed array: ${array1.join(' ')}`)