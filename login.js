document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Define users with their roles
    const users = {
        'oscar': { password: '0924', role: 'admin' },
        'zizo': { password: '0810', role: 'client' },
        // Add more users as needed
    };

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user exists and password is correct
    if (users[username] && users[username].password === password) {
        // Redirect based on user role
        if (users[username].role === 'admin') {
            window.location.href = 'admin.html';
        } else if (users[username].role === 'client') {
            window.location.href = 'client.html';
        }
    } else {
        // Show error message
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
