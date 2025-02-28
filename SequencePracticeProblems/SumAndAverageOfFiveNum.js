//Use Script & Debug – Write a program that reads 5 Random 2 Digit values , then find their sum and the average

// Generate 5 random two-digit numbers (10 to 99)
let num1 = Math.floor(Math.random() * 90) + 10;
let num2 = Math.floor(Math.random() * 90) + 10;
let num3 = Math.floor(Math.random() * 90) + 10;
let num4 = Math.floor(Math.random() * 90) + 10;
let num5 = Math.floor(Math.random() * 90) + 10;

// Calculate sum
let sum = num1 + num2 + num3 + num4 + num5;

// Calculate average
let average = sum / 5;

// Print the results (Using backticks ` for template literals)
console.log(`Numbers: ${num1}, ${num2}, ${num3}, ${num4}, ${num5}`);
console.log(`Sum: ${sum}`);
console.log(`Average: ${average.toFixed(2)}`); // Rounds to 2 decimal places
