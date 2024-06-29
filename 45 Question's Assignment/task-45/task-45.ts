/*Cars: Write a function that stores information about a car in a Object. The function should always receive 
a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the 
function with the required information and two other name-value pairs, such as a color or an optional 
feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;  // Allows for any number of additional properties of any type
}

function storeCarInfo(manufacturer: string, model: string, options: {[key: string]: any}): Car {
    // Initialize the car object with required properties
    let car: Car = {
        manufacturer,
        model
    };

    // Add all additional options to the car object
    for (let key in options) {
        car[key] = options[key];
    }

    return car;
}

// Example usage of the function
let car = storeCarInfo("Tesla", "Model 3", {
    color: "red",
    hasSunroof: true
});

console.log(car);
