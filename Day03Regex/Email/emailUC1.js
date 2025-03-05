const emailPattern = /^abc([a-zA-Z0-9._%+-]*)@bridgelabz\.co(\.[a-z]{2})?$/;

// Test cases
const emails = [
    "abc@bridgelabz.co",           // Valid
    "abc.xyz@bridgelabz.co.in",    // Valid (optional parts included)
    "abc_123@bridgelabz.co",       // Valid
    "abc@bridgelabz.com",          // Invalid (must be bridgelabz.co)
    "xyz@bridgelabz.co.in",        // Invalid (must start with abc)
    "abc@xyz.co",                  // Invalid (must contain bridgelabz)
    "abc@bridgelabz"               // Invalid (must end with .co or .co.in)
];

// Validate function
emails.forEach(email => {
    console.log(`${email} -> ${emailPattern.test(email) ? "Valid" : "Invalid"}`);
});
