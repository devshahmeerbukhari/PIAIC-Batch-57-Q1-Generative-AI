/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users: string[] = ["Shahmeer", "Ali", "Rahim", "Ahmad", "Abdullah"]
let new_users: string[] = ["Hassaan", "Abdullah", "Taiyab", "Rahim", "Junaid"]

for(let i = 0; i < new_users.length; i++){
    
}
new_users.forEach((user1: string)=>{
    user1 = user1.toLowerCase()
    let found = current_users.some((user: string) => {
        return user.toLowerCase() === user1;
    })
    if(found){
        console.log(user1 + " Username is not availbe, please try with another one!")
    } else{
        console.log(user1 + " Username is Available!")
    }
})