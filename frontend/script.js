// Inside script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    const dashboardUsername = document.getElementById('dashboard-username');

    // Function to show login container and hide others
    function showLogin() {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
        dashboardContainer.style.display = 'none';
    }

    // Function to show register container and hide others
    function showRegister() {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
        dashboardContainer.style.display = 'none';
    }

    // Function to show dashboard container and hide others
    function showDashboard(username) {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
        dashboardContainer.style.display = 'block';
        dashboardUsername.textContent = username;
    }

    // Event listener for the register link
    document.getElementById('register-link').addEventListener('click', (e) => {
        e.preventDefault();
        showRegister();
    });

    // Event listener for the login link
    document.getElementById('login-link').addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });

    // Event listener for the login form submission
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // You'll need to implement the backend API call to authenticate the user here
        // Once the user is logged in, you can call `showDashboard(username)` with the username.
    });

    // Event listener for the register form submission
    document.getElementById('register-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('new-username').value;
        const password = document.getElementById('new-password').value;
        // You'll need to implement the backend API call to register the user here
        // Once the user is registered, you can call `showDashboard(username)` with the username.
    });

    // Event listener for the logout button
    document.getElementById('logout-button').addEventListener('click', (e) => {
        e.preventDefault();
        // You'll need to implement the backend API call to log out the user here
        // After successful logout, you can call `showLogin()` to show the login container.
    });

    // On page load, show the login container by default
    showLogin();
    // showDashboard("priyabrata139");
});
