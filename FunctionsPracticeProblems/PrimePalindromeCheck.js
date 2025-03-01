/*Take a number from user and check if the number is a Prime then show

that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime*/
const readline = require('readline');

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to find the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

// Function to check both number and its palindrome for primality
function checkPrimeAndPalindrome(number) {
    if (isNaN(number) || number < 0) {
        console.log("Please enter a valid positive number.");
        return;
    }

    if (!isPrime(number)) {
        console.log(`${number} is not a prime number.`);
        return;
    }

    let palindrome = getPalindrome(number);
    let isPalindromePrime = isPrime(palindrome);

    console.log(`${number} is a prime number.`);
    console.log(`Its palindrome ${palindrome} is ${isPalindromePrime ? "also" : "not"} a prime number.`);
}

// Get user input from command line (Node.js)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const userInput = parseInt(input, 10);
    checkPrimeAndPalindrome(userInput);
    rl.close();
});