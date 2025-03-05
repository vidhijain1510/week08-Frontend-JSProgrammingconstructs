function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    
    if (emailPattern.test(email)) {
        console.log(`${email} is a valid email.`);
    } else {
        console.log(`${email} is NOT a valid email.`);
    }
}

// Test Cases
validateEmail("abc@bridgelabz.co");       // Valid
validateEmail("xyz@bridgelabz.co.in");    // Valid
validateEmail("user123@bridgelabz.co.com"); // Valid
validateEmail("abc@bridgelabz.in");       // Invalid (wrong third part)
validateEmail("test@bridgelabzcom");      // Invalid (missing dot after bridgelabz)
validateEmail("user@bridgelabz.coorg");   // Invalid (should have a dot before TLD)
validateEmail("user@google.com");         // Invalid (wrong domain)
