/*Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached.. */

const n = parseInt(process.argv[2], 10); // Read input from command line

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
} else {
    console.log(`Power of 2 table up to 2^${n} (max 256):`);
    
    let power = 1; // Start with 2^0 = 1
    for (let i = 0; i <= n && power <= 256; i++) {
        console.log(`2^${i} = ${power}`);
        power *= 2; // Multiply by 2 for next power
    }
}