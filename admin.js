document.addEventListener('DOMContentLoaded', function() {

    // Handle reset votes functionality
    const resetVotesButton = document.getElementById('reset-votes');
    const resetVotesMsg = document.getElementById('reset-votes-msg');

    if (resetVotesButton) {
        resetVotesButton.addEventListener('click', function() {
            // Reset the votes in localStorage
            localStorage.setItem('votes', JSON.stringify({
                candidate1: 0,
                candidate2: 0,
                candidate3: 0
            }));
            resetVotesMsg.textContent = 'All votes have been reset successfully!';
        });
    }

    // Handle start voting functionality
    const startVotingButton = document.getElementById('start-voting');
    if (startVotingButton) {
        startVotingButton.addEventListener('click', function() {
            // Example: You can implement logic here to unlock voting or display a message
            alert('Voting has started!');
        });
    }

    // Handle end voting functionality
    const endVotingButton = document.getElementById('end-voting');
    if (endVotingButton) {
        endVotingButton.addEventListener('click', function() {
            // Example: You can implement logic here to lock voting or display a message
            alert('Voting has ended!');
        });
    }

    // Handle view users functionality
    const viewUsersButton = document.getElementById('view-users');
    if (viewUsersButton) {
        viewUsersButton.addEventListener('click', function() {
            // Example: Display a list of users from localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];
            alert('Viewing users: ' + users.map(user => user.username).join(', '));
        });
    }

    // Handle manage candidates functionality
    const manageCandidatesButton = document.getElementById('manage-candidates');
    if (manageCandidatesButton) {
        manageCandidatesButton.addEventListener('click', function() {
            // Example: Implement candidate management logic here
            alert('Manage candidates functionality');
        });
    }

    // Handle logout functionality
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Clear logged-in user from localStorage and redirect to login page
            localStorage.removeItem('loggedInUser');
            window.location.href = 'login.html';
        });
    }
});
document.getElementById('start-vote-btn').addEventListener('click', function() {
    alert('Voting has been started!');
    // Add functionality to start the voting process
});

document.getElementById('end-vote-btn').addEventListener('click', function() {
    alert('Voting has been ended!');
    // Add functionality to stop the voting process and show results
});

document.getElementById('manage-candidates-btn').addEventListener('click', function() {
    alert('Manage candidates section');
    // Add functionality to manage candidates
});

document.getElementById('view-users-btn').addEventListener('click', function() {
    alert('View users section');
    // Add functionality to view registered users
});
document.addEventListener('DOMContentLoaded', function() {
    const addCandidateForm = document.getElementById('add-candidate-form');
    const candidateNameInput = document.getElementById('candidate-name');
    const candidateDescInput = document.getElementById('candidate-description');
    const candidateList = document.getElementById('candidate-list');

    // Retrieve existing candidates from localStorage
    let candidates = JSON.parse(localStorage.getItem('candidates')) || [];

    // Display the current candidates
    function displayCandidates() {
        candidateList.innerHTML = ''; // Clear current list
        candidates.forEach((candidate, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${candidate.name}</strong> - ${candidate.description} <button onclick="deleteCandidate(${index})">Delete</button>`;
            candidateList.appendChild(li);
        });
    }

    // Add new candidate
    addCandidateForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const candidate = {
            name: candidateNameInput.value,
            description: candidateDescInput.value
        };

        // Add candidate to the array
        candidates.push(candidate);
        localStorage.setItem('candidates', JSON.stringify(candidates));

        // Clear form inputs
        candidateNameInput.value = '';
        candidateDescInput.value = '';

        // Display updated list
        displayCandidates();
    });

    // Delete a candidate
    window.deleteCandidate = function(index) {
        candidates.splice(index, 1);
        localStorage.setItem('candidates', JSON.stringify(candidates));
        displayCandidates();
    };

    // Initially display candidates
    displayCandidates();
});
document.addEventListener('DOMContentLoaded', function() {
    const addCandidateForm = document.getElementById('add-candidate-form');
    const candidateNameInput = document.getElementById('candidate-name');
    const candidateDescInput = document.getElementById('candidate-description');
    const candidateList = document.getElementById('candidate-list');

    // Retrieve existing candidates from localStorage or use an empty array if none exist
    let candidates = JSON.parse(localStorage.getItem('candidates')) || [];

    // Display the candidates
    function displayCandidates() {
        candidateList.innerHTML = ''; // Clear current list
        candidates.forEach((candidate, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${candidate.name}</strong> - ${candidate.description} <button onclick="deleteCandidate(${index})">Delete</button>`;
            candidateList.appendChild(li);
        });
    }

    // Add a new candidate
    addCandidateForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const candidate = {
            name: candidateNameInput.value,
            description: candidateDescInput.value
        };

        // Add the new candidate to the candidates array
        candidates.push(candidate);

        // Store the updated candidates in localStorage
        localStorage.setItem('candidates', JSON.stringify(candidates));

        // Clear the input fields
        candidateNameInput.value = '';
        candidateDescInput.value = '';

        // Display updated candidates
        displayCandidates();
    });

    // Delete a candidate
    window.deleteCandidate = function(index) {
        // Remove the candidate from the array
        candidates.splice(index, 1);

        // Update localStorage with the new list
        localStorage.setItem('candidates', JSON.stringify(candidates));

        // Display updated candidates
        displayCandidates();
    };

    // Initial display of candidates
    displayCandidates();
});
