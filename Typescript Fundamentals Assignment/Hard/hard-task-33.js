/*Write a function that takes an array of integers and sorts them from smallest to largest.*/
function sortArr(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
let array3 = [5, 4, 3, 6, 8, 7, 9, 10, 22, 11, 3, 2, 1, -138];
console.log(`Original Array: ${array3}`);
array3 = sortArr(array3);
console.log(`Sorted Array: ${array3}`);
export {};
