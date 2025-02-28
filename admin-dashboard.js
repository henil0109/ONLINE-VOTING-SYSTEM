// admin-dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('adminLoggedIn')) {
        window.location.href = 'login.html'; // Redirect if not logged in as admin
    }

    // Your admin dashboard functionality (Start/Stop Voting, Manage Candidates, etc.)
});
