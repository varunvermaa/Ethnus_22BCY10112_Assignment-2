document.getElementById("loginForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Username validation
    let username = document.getElementById("username");
    let usernameError = document.getElementById("usernameError");
    if (username.value.trim() === "") {
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    // Password validation
    let password = document.getElementById("password");
    let passwordError = document.getElementById("passwordError");
    if (password.value.trim() === "") {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
