//Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN
function cleanArray(array: any[]){
    return (array.filter((element) => {
        return element != false && element != null && element != 0 && element != "" && element != undefined && !Number.isNaN(element)
    }))
    /*OR
    return array.filter(Boolean)
    This uses the Boolean constructor as a function that converts values to their Boolean equivalents—false 
    for falsey values and true for truthy values. This is a concise and effective way to remove all falsey 
    values (false, null, 0, "", undefined, NaN) from the array.
    */
}
let arr1: any[] = [1, 2, 3, false, undefined, 'a', 3, 5, "", 0, null, 6, 'd', 'f', 0, 2, undefined, 0]
console.log(`Original Array: ${arr1}`)
arr1 = cleanArray(arr1)
console.log(`After cleaning the array: ${arr1}`)