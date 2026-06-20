/*
// Today's forecast temperature in Kelvin
const kelvin = 293;

// Convert Kelvin to Celsius
function KelToSlc(){
    celsius = kelvin-273.15;
    console.log(celsius);
}

kelToSlc();

// Convert Celsius to Fahrenheit
function CelsToFahr(){
    fahrenheit = celsius * (9/5) + 32;
    // Round down the Fahrenheit temperature
    console.log(Math.floor(fahrenheit));
}

CelsToFahr();
*/

// Today's forecast temperature in Kelvin
const kelvin = 293;

// Convert Kelvin to Celsius
const celsius = kelvin - 273.15;

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Display the result
console.log(`The temprature is ${fahrenheit} degrees fahrenheit.`);