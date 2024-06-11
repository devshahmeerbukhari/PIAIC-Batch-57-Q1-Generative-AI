/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let user: string[] = ["Shahmeer", "Ali", "Rahim", "Ahmad"]
function check(user: string[]): void{
    if(user.length === 0){
        console.log("We need to find some users!")
    } else{
        console.log("Not empty!")
    }
}
check(user)
let len: number = user.length
for(let i = 0; i < len; i++){
    user.pop()
}
check(user)
