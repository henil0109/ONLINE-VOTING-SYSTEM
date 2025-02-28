// login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    // Admin credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if admin is logging in
        if (username === adminUsername && password === adminPassword) {
            // Store admin login status in sessionStorage
            sessionStorage.setItem('adminLoggedIn', 'true');
            window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
        } else {
            // For regular users (you can add more validation here)
            alert('User login credentials check');
            window.location.href = 'vote.html'; // Redirect to voting page
        }
    });
});
