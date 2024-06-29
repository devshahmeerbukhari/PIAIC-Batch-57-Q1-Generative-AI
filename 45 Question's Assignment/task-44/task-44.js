"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should print
a summary of the sandwich that is being ordered. Call the function three times, using a different number
of arguments each time.*/
Object.defineProperty(exports, "__esModule", { value: true });
function sandwiches(...items) {
    if (items.length != 0) {
        console.log("Following sandwitched are ordered!");
        items.forEach((item) => console.log(item, " ")); //callback function is called here
    }
    else {
        console.log("Nothing is Ordered!");
    }
}
console.log("Order-1");
sandwiches("Chiceken");
console.log("Order-2");
sandwiches();
console.log("Order-3");
sandwiches("Chiceken", "B.B.Q");
console.log("Order-4");
sandwiches("Chiceken", "Fajita", "B.B.Q");
