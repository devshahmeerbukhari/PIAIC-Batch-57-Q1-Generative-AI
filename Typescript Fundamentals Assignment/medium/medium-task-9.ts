let age: number = 19
function checkAge(age: number){
    if(age >= 18){
        console.log(`You are adult, 18+!`)
    }
    else{
        console.log(`You are minor 18!`)
    }
}
checkAge(age)
age = 15
checkAge(age)