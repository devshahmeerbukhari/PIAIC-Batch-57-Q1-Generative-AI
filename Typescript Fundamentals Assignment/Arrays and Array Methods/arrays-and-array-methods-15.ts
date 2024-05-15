//Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of 
//times the score exceeded the maximum score and the number of times it fell below the minimum score.
let scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1]
function findCount(array: number[]){
    let maxScore = array[0]
    let minScore = array[1]
    let maxScoreCount = 0, minScoreCount = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > maxScore){
            maxScoreCount++
        }
        if(array[i] < minScore){
            minScoreCount++
        }
    }
    return [maxScore, maxScoreCount, minScore, minScoreCount]
}
let result = findCount(scores)
console.log(`${result[1]} Score are greater than ${result[0]} and ${result[3]} scores are less than ${result[2]} and rest of all are same!`)