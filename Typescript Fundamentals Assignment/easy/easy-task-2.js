"use strict";
var temperature = 21;
function isCold(temperature) {
    if (temperature < 20) {
        console.log("It's Cold!");
    }
    else {
        console.log("It's Hot!");
    }
}
isCold(temperature);
temperature = 18;
isCold(temperature);
