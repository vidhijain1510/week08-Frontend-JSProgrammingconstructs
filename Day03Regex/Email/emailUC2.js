function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@bridgelabz\.[a-zA-Z]{2,}$/;
    
    if (emailPattern.test(email)) {
        console.log(`${email} is a valid email.`);
    } else {
        console.log(`${email} is NOT a valid email.`);
    }
}

// Test Cases
validateEmail("abc@bridgelabz.co");      // Valid
validateEmail("xyz@bridgelabz.in");      // Valid
validateEmail("test.user@bridgelabz.com"); // Valid
validateEmail("user@google.com");        // Invalid (wrong domain)
validateEmail("bridgelabz@bridgelabz.com"); // Valid
validateEmail("abc@bridgelabz");         // Invalid (missing top-level domain)
validateEmail("abc#bridgelabz.co.in");   // Invalid (missing @)
