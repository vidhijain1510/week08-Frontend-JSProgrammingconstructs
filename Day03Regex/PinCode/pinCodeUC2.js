/*Restrict the PIN code from
taking alphabets or special
characters at the
beginning.
Check for A400088 – this
should fail
in js*/
function isValidPin(pin) {
    const pinRegex = /^[0-9][0-9]*$/; // Ensures the first character is a digit and the rest are numbers
    return pinRegex.test(pin);
}

// Test cases
console.log(isValidPin("A400088")); // false (starts with an alphabet)
console.log(isValidPin("@400088")); // false (starts with a special character)
console.log(isValidPin("400088"));  // true  (valid PIN)
console.log(isValidPin("123456"));  // true  (valid PIN)
console.log(isValidPin("400088A")); // false (has an alphabet at the end)