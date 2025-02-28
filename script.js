document.addEventListener('DOMContentLoaded', function () {
    // Handle sign-up form submission
    const signUpForm = document.getElementById('create-account-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const dob = new Date(document.getElementById('dob').value);
            const age = new Date().getFullYear() - dob.getFullYear();
            if (age < 18) {
                alert('You must be 18 or older to sign up.');
                return;
            }

            const user = {
                aadhaar: document.getElementById('aadhaar').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                dob: dob,
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                hasVoted: false
            };

            // Save the user to localStorage
            localStorage.setItem('user', JSON.stringify(user));
            alert('Account created successfully!');
            window.location.href = 'login.html';
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Retrieve user from localStorage
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.username === username && storedUser.password === password) {
                alert('Login successful!');
                localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
                window.location.href = 'vote.html'; // Redirect to voting page
            } else {
                alert('Invalid username or password!');
            }
        });
    }

    // Handle vote form submission
    const voteForm = document.getElementById('vote-form');
    if (voteForm) {
        voteForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Retrieve the logged-in user
            let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

            if (loggedInUser.hasVoted) {
                alert('You have already voted!');
                return;
            }

            const selectedCandidate = document.getElementById('candidate').value;

            // Retrieve votes from localStorage or initialize if not present
            let votes = JSON.parse(localStorage.getItem('votes')) || {
                candidate1: 0,
                candidate2: 0,
                candidate3: 0
            };

            // Increment the vote count for the selected candidate
            votes[selectedCandidate]++;
            localStorage.setItem('votes', JSON.stringify(votes));

            // Mark user as having voted
            loggedInUser.hasVoted = true;
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

            // Redirect to thank you page
            window.location.href = 'thankyou.html';
        });
    }

    // Display vote results on result.html
    const voteTally = document.getElementById('vote-tally');
    const winnerDisplay = document.getElementById('winner');
    if (voteTally && winnerDisplay) {
        let votes = JSON.parse(localStorage.getItem('votes')) || {
            candidate1: 0,
            candidate2: 0,
            candidate3: 0
        };

        // Display vote tally
        Object.keys(votes).forEach(candidate => {
            const li = document.createElement('li');
            li.textContent = `${candidate}: ${votes[candidate]} votes`;
            voteTally.appendChild(li);
        });

        // Determine winner
        let winner = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
        winnerDisplay.textContent = `Winner: ${winner}`;
    }
});
