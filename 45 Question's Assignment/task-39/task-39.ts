/*City Names: Write a function called city_country() that takes in the name of a 
city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value 
that’s returned.*/

function city_country(name: string, country: string): string{
    return `${name}, ${country}`
}
let ret_Value: string = city_country("Lahore", "Pakistan")
console.log(ret_Value)
console.log(city_country("Delhi", "India"))
console.log(city_country("Islamabad", "Pakistan"))