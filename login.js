// ==============================
// PASSWORD SHOW / HIDE
// ==============================

const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("passwordToggle");

passwordToggle.addEventListener("click", function(){

    if (passwordInput.type === "password")
    {
        passwordInput.type = "text";

        passwordToggle.classList.remove("fa-eye");

        passwordToggle.classList.add("fa-eye-slash");
    }

    else
    {
        passwordInput.type = "password";

        passwordToggle.classList.remove("fa-eye-slash");

        passwordToggle.classList.add("fa-eye");
    }

});


// ==============================
// LOGIN ELEMENTS
// ==============================

const loginForm = document.getElementById("loginForm");

const username = document.getElementById("username");

const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");

const passwordError = document.getElementById("passwordError");

const loginMessage = document.getElementById("loginMessage");


// ==============================
// DEMO USERS
// ==============================

const users = [

    {
        username: "student",
        password: "123",
        name:"Akshat Srivastav",
        role: "student"
    },

    {
        username: "staff",
        password: "123",
        name: "Demo Staff",
        role: "staff"
    },

    {
        username: "principal",
        password: "123",
        name: "Demo Principal",
        role: "principal"
    },

    {
        username: "owner",
        password: "123",
        name: "School Owner",
        role: "owner"
    }

];


// ==============================
// CLEAR ERRORS
// ==============================

function clearLoginErrors()
{
    usernameError.textContent = "";

    passwordError.textContent = "";

    loginMessage.textContent = "";
}


// ==============================
// LOGIN FORM
// ==============================

loginForm.addEventListener("submit", function(event)
{
    event.preventDefault();

    clearLoginErrors();

    let isValid = true;


    // Username Validation

    if (username.value.trim() === "")
    {
        usernameError.textContent =
            "Please enter user name.";

        isValid = false;
    }


    // Password Validation

    if (password.value.trim() === "")
    {
        passwordError.textContent =
            "Please enter password.";

        isValid = false;
    }


    // Stop if validation failed

    if (!isValid)
    {
        return;
    }


    // Find user

    const user = users.find(function(user){

        return (
            user.username === username.value.trim()
            &&
            user.password === password.value.trim()
        );

    });


    // User Found

    if (user)
    {
        loginMessage.style.color = "#198754";

        loginMessage.textContent =
            "Login successful! Redirecting...";


        // Save logged in user

        const loginUser = {
            username: user.username,
            name: user.name,
            role: user.role
        };
            localStorage.setItem(
            "loggedInUser",
            JSON.stringify(loginUser)
        );


        // Redirect according to role

        setTimeout(function(){

            if (user.role === "student")
            {
                window.location.href =
                    "student-dashboard.html";
            }


            else if (user.role === "staff")
            {
                window.location.href =
                    "staff-dashboard.html";
            }


            else if (user.role === "principal")
            {
                window.location.href =
                    "principal-dashboard.html";
            }


            else if (user.role === "owner")
            {
                window.location.href =
                    "owner-dashboard.html";
            }

        }, 800);

    }


    // User Not Found

    else
    {
        loginMessage.style.color = "#dc3545";

        loginMessage.textContent =
            "Invalid username or password.";
    }

});