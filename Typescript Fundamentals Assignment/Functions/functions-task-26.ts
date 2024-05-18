/*Create a function isSorted that checks if an array is sorted in ascending order.*/
function isSorted(array: number[]){
    let firstElement = array[0]
    let sorted = true
    for(let i = 1; i < array.length; i++){
        if(firstElement > array[i]){
            sorted = false
            return false
        }
        firstElement = array[i]
    }
    return sorted
}
let array6: number[] = [1, 2, 3, 4, 5, 6]
if(isSorted(array6)) console.log('Array is Sorted')
else console.log('Array is not Sorted!')