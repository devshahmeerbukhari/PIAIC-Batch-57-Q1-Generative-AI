//Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(array: any[]){
    const visited = new Set()
    const duplicate = new Set()
    array.forEach((element)=>{
        if(visited.has(element)) duplicate.add(element)
        else visited.add(element)
    })
    return Array.from(duplicate)
}
let array3: any[] = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
console.log(`Duplicate or Repeated elements are: [${findDuplicates(array3)}]`)