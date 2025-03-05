function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    
    if (emailPattern.test(email)) {
        console.log(`${email} is a valid email.`);
    } else {
        console.log(`${email} is NOT a valid email.`);
    }
}

// Valid Emails
validateEmail("abc@bridgelabz.co");        // Valid (No TLD)
validateEmail("xyz@bridgelabz.co.in");     // Valid (.in TLD)
validateEmail("user123@bridgelabz.co.us"); // Valid (.us TLD)
validateEmail("test_email@bridgelabz.co.uk"); // Valid (.uk TLD)

// Invalid Emails
validateEmail("abc@bridgelabz.in");        // Invalid (Missing "co")
validateEmail("user@bridgelabz.coorg");    // Invalid (TLD should be only 2 characters)
validateEmail("test@bridgelabzco.in");     // Invalid (Missing dot before "co")
validateEmail("test@google.com");          // Invalid (Wrong domain)
validateEmail("test@bridgelabz.co.123");   // Invalid (TLD should contain only letters)
