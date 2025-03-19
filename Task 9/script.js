document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Collect input values
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let contact = document.getElementById("contact").value.trim();
            let address = document.getElementById("address").value.trim();

            if (!name || !email || !contact || !address) {
                alert("All fields are required!");
                return;
            }

            // Retrieve existing users from localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Add new user
            users.push({ name, email, contact, address });

            // Save back to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // Reset form
            form.reset();
            alert("User registered successfully!");
        });
    }

    // Display users on the View Page
    const userTableBody = document.getElementById("userTableBody");
    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        users.forEach(user => {
            let row = userTableBody.insertRow();
            row.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.contact}</td><td>${user.address}</td>`;
        });
    }
});
