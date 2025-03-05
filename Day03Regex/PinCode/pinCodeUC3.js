/*Restrict the PIN code from
taking alphabets or special
characters at the End.
Check for 400088B – this
should fail
in js*/
function isValidPin(pin) {
    const pinRegex = /^[0-9]+[0-9]$/; // Ensures only digits and does not end with alphabets or special characters
    return pinRegex.test(pin);
}

// Test cases
console.log(isValidPin("400088B")); // false (ends with an alphabet)
console.log(isValidPin("400088@")); // false (ends with a special character)
console.log(isValidPin("400088"));  // true  (valid PIN)
console.log(isValidPin("123456"));  // true  (valid PIN)
console.log(isValidPin("A400088")); // false (starts with an alphabet)
console.log(isValidPin("@400088")); // false (starts with a special character)