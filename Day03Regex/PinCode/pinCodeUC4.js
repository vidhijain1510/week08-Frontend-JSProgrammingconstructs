function isValidPin(pin) {
    const pinRegex = /^[0-9]+( [0-9]+)?$/; // Allows digits with an optional single space between groups
    return pinRegex.test(pin);
}

// Test cases
console.log(isValidPin("400088"));   // true  (valid PIN)
console.log(isValidPin("400 088"));  // true  (valid PIN with space)
console.log(isValidPin("400088B"));  // false (ends with an alphabet)
console.log(isValidPin("400088@"));  // false (ends with a special character)
console.log(isValidPin("A400088"));  // false (starts with an alphabet)
console.log(isValidPin("@400088"));  // false (starts with a special character)
console.log(isValidPin("400 088 9"));// false (more than one space)
console.log(isValidPin("400  088")); // false (multiple spaces together)
console.log(isValidPin("400 088 ")); // false (ends with a space)
console.log(isValidPin(" 400088"));  // false (starts with a space)