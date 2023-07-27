// Inside script.js
document.addEventListener("DOMContentLoaded", () => {
  const loginContainer = document.getElementById("login-container");
  const registerContainer = document.getElementById("register-container");
  const dashboardContainer = document.getElementById("dashboard-container");
  const dashboardUsername = document.getElementById("dashboard-username");
  const responseContainer = document.getElementById('response-container');

  // Function to show login container and hide others
  function showLogin() {
    loginContainer.style.display = "block";
    registerContainer.style.display = "none";
    dashboardContainer.style.display = "none";
    // responseContainer.style.display = "block";
    if (responseContainer.style.display == "block") {
      responseContainer.style.display = "none";
    }
    else
    responseContainer.style.display = "block";
  }

  // Function to show register container and hide others
  function showRegister() {
    loginContainer.style.display = "none";
    registerContainer.style.display = "block";
    dashboardContainer.style.display = "none";
    responseContainer.style.display = "block";
  }

  // Function to show dashboard container and hide others
  function showDashboard(username) {
    loginContainer.style.display = "none";
    registerContainer.style.display = "none";
    dashboardContainer.style.display = "block";
    dashboardUsername.textContent = username;
    responseContainer.style.display = "none";

  }

  // Event listener for the register link
  document.getElementById("register-link").addEventListener("click", (e) => {
    e.preventDefault();
    showRegister();
  });

  // Event listener for the login link
  document.getElementById("login-link").addEventListener("click", (e) => {
    e.preventDefault();
    showLogin();
  });

  // Event listener for the login form submission
  document
    .getElementById("login-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
    
    try {
      const response = await axios.post("http://localhost:8080/api/v1/users/signin", {
        email: username,
        password: password,
      });
      console.log(response.data);
      showDashboard(username);
    } catch (error) {
      console.log(error);

      if (error.code === "ERR_NETWORK") {
        responseContainer.innerHTML = "Internal Server Error";
        

      }
      else {
        const error_message = error.response.data.error.explanation;
        responseContainer.innerHTML = error_message;
      }
      console.log(error);
    }
     
    });

  // Event listener for the register form submission
  document
    .getElementById("register-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("new-username").value;
      const password = document.getElementById("new-password").value;
      try {
        const response = await axios.post("http://localhost:8080/api/v1/users/signup", {
          email: username,
          password: password,
        });
        console.log(response.data);
        showDashboard(username);
      } catch (error) {
        
        if (error.code === "ERR_NETWORK") {
          responseContainer.innerHTML = "Internal Server Error";
          
  
        }
        else {
          const error_message = error.response.data.error.explanation;
          responseContainer.innerHTML = error_message;
        }
        console.log(error);
      }
      
    });

  // Event listener for the logout button
  document.getElementById("logout-button").addEventListener("click", (e) => {
    e.preventDefault();
    showLogin();
   
  });

  // On page load, show the login container by default
  showLogin();
  // showDashboard(username);
  // showDashboard("priyabrata139");
});
