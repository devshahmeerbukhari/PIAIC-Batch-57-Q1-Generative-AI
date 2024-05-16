//Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(array: number[], sumEven: boolean){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        if(sumEven){
            if(array[i] % 2 === 0){
                sum += array[i]
            }
        }
        else{
            if(array[i] % 2 !== 0){
                sum += array[i]
            }
        }
    }
    return sum
}
let numberArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Sum of even number is: ${sumOfElements(numberArr, true)}`)
console.log(`Sum of odd number is: ${sumOfElements(numberArr, false)}`)
console.log(`Total Sum is: ${sumOfElements(numberArr, true) + sumOfElements(numberArr, false)}`)