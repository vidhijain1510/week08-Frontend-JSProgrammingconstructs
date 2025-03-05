function isValidPinCode(pin) {
    const pinPattern = /^[1-9][0-9]{5}$/;
    return pinPattern.test(pin);
}

// Test PIN Codes
console.log(isValidPinCode("400088")); //  true (Valid)
console.log(isValidPinCode("110001")); //  true (Valid)
console.log(isValidPinCode("012345")); //  false (Starts with 0)
console.log(isValidPinCode("1234"));   //  false (Less than 6 digits)
console.log(isValidPinCode("1234567"));//  false (More than 6 digits)
console.log(isValidPinCode("abcd12")); //  false (Contains letters)
