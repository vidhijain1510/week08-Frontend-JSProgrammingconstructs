function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9]([a-zA-Z0-9_.+\-]*[a-zA-Z0-9])?@bridgelabz\.co\.in$/;
    return regex.test(email);
}

// Test cases
console.log(isValidEmail("abc.xyz@bridgelabz.co.in"));  // true (valid)
console.log(isValidEmail("abc-xyz@bridgelabz.co.in"));  // true (valid)
console.log(isValidEmail("abc+xyz@bridgelabz.co.in"));  // true (valid)
console.log(isValidEmail("abc_xyz@bridgelabz.co.in"));  // true (valid)
console.log(isValidEmail("abc..xyz@bridgelabz.co.in")); // false (double dot)
console.log(isValidEmail(".abc@bridgelabz.co.in"));     // false (starts with special char)
console.log(isValidEmail("abc.@bridgelabz.co.in"));     // false (ends with special char)
console.log(isValidEmail("abc@bridgelabz.com"));        // false (must end with .co.in)
console.log(isValidEmail("abc@xyz.bridgelabz.co.in"));  // false (wrong domain structure)
console.log(isValidEmail("abc xyz@bridgelabz.co.in"));  // false (contains space)