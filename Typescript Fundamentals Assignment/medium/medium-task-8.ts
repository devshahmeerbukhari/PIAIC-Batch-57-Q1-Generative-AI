const temperature:any = [22, 43, 23, 48, 23];
let maxTemperature: number = temperature[0]
for(let i = 1; i < 5; i++){
    if(maxTemperature < temperature[i]){
        maxTemperature = temperature[i]
    }
}
console.log(`Max temperature is: ${maxTemperature}`)