"use strict";
/*Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.*/
function fahrenheitToCelsius(array) {
    let newArry = [];
    for (let i = 0; i < array.length; i++) {
        newArry[i] = 5 / 9 * (array[i] - 32);
    }
    return newArry;
}
let temperatureInFahrenheit = [100, 98.7, 122, 140, 166];
console.log(`Temperature in fahrenheit is: ${temperatureInFahrenheit}`);
console.log(`Temperature in Celsius is: ${fahrenheitToCelsius(temperatureInFahrenheit)}`);
