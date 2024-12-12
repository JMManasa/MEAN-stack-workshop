// Function to restrict characters in the Name field (no numbers allowed)
function restrictNameInput(event) {
    var input = event.target;
    input.value = input.value.replace(/[^a-zA-Z\s]/g, ''); // Remove non-alphabetic characters and spaces
}

// Function to restrict Phone number input (only numbers, exactly 10 digits)
function restrictPhoneInput(event) {
    var input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Allow only numeric characters
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10); // Limit to 10 digits
    }
}

// Function to restrict PAN Card input (valid PAN card format)
function restrictPanInput(event) {
    var input = event.target;
    input.value = input.value.toUpperCase(); // Convert input to uppercase
    input.value = input.value.replace(/[^A-Z0-9]/g, ''); // Allow only uppercase letters and numbers
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10); // Limit to 10 characters
    }
}

function validateForm() {
    var name = document.getElementById("Name").value;
    //var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var phone = document.getElementById("ph_no").value;
    var pan = document.getElementById("pan").value;
    var errorMsg = document.getElementById("error");

    // Clear any previous error messages
    errorMsg.innerHTML = "";

    // 1. Validate Name (No numbers allowed)
    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        errorMsg.innerHTML += "Name should not contain numbers.<br>";
        return false;
    }

    // 2. Validate Password (At least 8 characters)
    if (pass.length < 8) {
        errorMsg.innerHTML += "Password must be at least 8 characters long.<br>";
        return false;
    }

    // 3. Validate Phone Number (Exactly 10 digits, only numbers)
    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        errorMsg.innerHTML += "Phone number should have exactly 10 digits and only numbers.<br>";
        return false;
    }

    // 4. Validate PAN Card Number (Must be 10 characters, alphanumeric format)
    var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(pan)) {
        errorMsg.innerHTML += "PAN Card number must be in the format: XXXXX1234X.<br>";
        return false;
    }

    // If all validations pass
    return true;
}