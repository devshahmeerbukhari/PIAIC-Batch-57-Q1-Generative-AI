/*Write a function minMaxAverage that takes an array of numbers and returns 
an object with properties for the minimum, maximum, and average of those numbers.*/
function minMaxAverage(array: number[]){
    let min: number = array[0]
    let max: number = array[0]
    let avgSum: number = 0
    for(let i = 0; i < array.length; i++){
        if(min > array[i]){
            min = array[i]
        }
        if(max < array[i]){
            max = array[i]
        }
        avgSum += array[i]
    }
    return [min, max, (avgSum/array.length)]
}
let array9: number[] = [1, 2, 3, -1, 4, 5, 6, 138, 3]
let res: number[] = minMaxAverage(array9)
console.log(`Original array is: ${array9}`)
console.log(`Min is ${res[0]}, Max is ${res[1]}, and Avg is: ${res[2]}`)