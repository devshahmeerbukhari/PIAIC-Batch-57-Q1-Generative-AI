/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a 
message that should be printed on the shirt. The function should print a sentence 
summarizing the size of the shirt and the message printed on it. Call the function.*/

function make_shirt(size: string, message: string){
    console.log(`Size of a function is: ${size}\nMessage printed on the shirt is: ${message}`)
}
let size: string = "Medium"
let message: string = "Nothing is impossible!";
make_shirt(size, message)