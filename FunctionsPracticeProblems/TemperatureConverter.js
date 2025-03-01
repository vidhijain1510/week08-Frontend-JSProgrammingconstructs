/*Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertTemperature() {
    console.log("Choose Conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");
    
    rl.question("Enter your choice (1 or 2): ", function(choice) {
        switch (choice) {
            case '1':
                rl.question("Enter temperature in Celsius (0°C - 100°C): ", function(degC) {
                    degC = parseFloat(degC);
                    if (degC >= 0 && degC <= 100) {
                        console.log(`${degC}°C = ${celsiusToFahrenheit(degC).toFixed(2)}°F`);
                    } else {
                        console.log(" Invalid input! Please enter a value between 0°C and 100°C.");
                    }
                    rl.close();
                });
                break;
                
            case '2':
                rl.question("Enter temperature in Fahrenheit (32°F - 212°F): ", function(degF) {
                    degF = parseFloat(degF);
                    if (degF >= 32 && degF <= 212) {
                        console.log(`${degF}°F = ${fahrenheitToCelsius(degF).toFixed(2)}°C`);
                    } else {
                        console.log(" Invalid input! Please enter a value between 32°F and 212°F.");
                    }
                    rl.close();
                });
                break;

            default:
                console.log("Invalid choice! Please enter 1 or 2.");
                rl.close();
        }
    });
}

// Run the program
convertTemperature();