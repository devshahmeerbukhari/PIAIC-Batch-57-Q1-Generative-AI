//Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let arrays1: number[] = [1, 2, 3]
let arrays2: number[] = [4, 5, 6]
let arrays3: number[]
arrays3 = arrays1.concat(arrays2)
console.log(`Arrays1: ${arrays1}`)
console.log(`Arrays2: ${arrays2}`)
console.log(`After concatenating arrays1 and arrays2 into arrays 3: ${arrays3}`)
