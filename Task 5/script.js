document.getElementById("contactForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Name Validation
    let name = document.getElementById("name");
    let nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        name.classList.add("error-border");
        nameError.style.display = "inline";
        isValid = false;
    } else {
        name.classList.remove("error-border");
        nameError.style.display = "none";
    }

    // Email Validation
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.classList.add("error-border");
        emailError.style.display = "inline";
        isValid = false;
    } else {
        email.classList.remove("error-border");
        emailError.style.display = "none";
    }

    // Website Validation
    let website = document.getElementById("website");
    let websiteError = document.getElementById("websiteError");
    let urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(website.value.trim())) {
        website.classList.add("error-border");
        websiteError.style.display = "inline";
        isValid = false;
    } else {
        website.classList.remove("error-border");
        websiteError.style.display = "none";
    }

    // Message Validation
    let message = document.getElementById("message");
    let messageError = document.getElementById("messageError");
    if (message.value.trim() === "") {
        message.classList.add("error-border");
        messageError.style.display = "inline";
        isValid = false;
    } else {
        message.classList.remove("error-border");
        messageError.style.display = "none";
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
