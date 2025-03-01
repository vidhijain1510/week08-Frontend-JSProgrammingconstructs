//Write a program that takes a input and determines if the number is a prime.
const n = parseInt(process.argv[2], 10); // Read input from command line

if (isNaN(n) || n <= 1) {
    console.log("Please enter a valid number greater than 1.");
} else {
    let isPrime = true;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${n} is a Prime Number`);
    } else {
        console.log(`${n} is not a Prime Number`);
    }
}