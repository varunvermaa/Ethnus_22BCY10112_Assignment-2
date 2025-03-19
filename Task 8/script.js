document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let isValid = true;

    function validateField(id, errorId) {
        let field = document.getElementById(id);
        let error = document.getElementById(errorId);
        if (field.value.trim() === "") {
            error.style.display = "inline";
            isValid = false;
        } else {
            error.style.display = "none";
        }
    }

    validateField("firstName", "firstNameError");
    validateField("lastName", "lastNameError");
    validateField("email", "emailError");
    validateField("password", "passwordError");
    validateField("age", "ageError");
    validateField("phone", "phoneError");
    validateField("address", "addressError");
    validateField("state", "stateError");

    // Password match validation
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    
    if (password !== confirmPassword || password.trim() === "") {
        confirmPasswordError.style.display = "inline";
        isValid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
