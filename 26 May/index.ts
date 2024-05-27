interface Ball{
    diameter: number
}
interface Sphare{
    diameter: number,
    length: number
}

let ball: Ball = {
    diameter: 10
} //This is Object Literal
let sphare: Sphare = {
    diameter: 20,
    length: 2
}

//sphare = ball    Here it till show error because stracture of both object is not same
ball = sphare   //Will nor show error because structure is same, and other keys will be optional...    And this is known as Stail Object
//In stail object we always see the structure of left side object
//It means all the required keys of left hand side's object should be in the object of iright hand side


//Index Signature (for unknown keys and value)
var x: {id: number; [keyName: string /*string is the key type*/]: any} //Key of object is always string
x = {
    id: 2
}
console.log("Value of x: ", x)
x = {
    id: 2,
    name: "Shahmeer"
}
console.log("Value of x: ", x)
x = {
    id: 10,         //Id is mandatory, if we will not enter the value of id, it will show the error
    fullName: "Shahmeer Bukhari",
    occupation: "Student",
    contact: 311
}
console.log("Value of x: ", x)
console.log("Name from x: ", x["fullName"])


var x1: {foo: number}
    //x1 = {foo: 1, bar: 10} //=> Error will occure
    var y: {foo: number, bar: number}
    y = {
        foo: 10,
        bar: 20
    }
    x1 = y //=>Here no error will occure


//type casting
let var1: unknown = "Shahmeer"
console.log("Str", typeof var1)
console.log("Num", typeof(var1 as number))


let num1: string = "123"
let numValue: number = num1 as unknown as number
console.log("Type of num1: ", typeof num1)
console.log("Num Value: ", numValue)
console.log("Type of num Value: ", typeof(numValue))
