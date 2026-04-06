const form = document.querySelector('#advancedRegistrationForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const error = document.querySelector('#error');
const success = document.querySelector('#success');

// Event listeners for real-time validation
username.addEventListener('input', validateUsername);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    error.textContent = '';
    success.textContent = '';

    // Validate fields
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // Focus on the first invalid field
    if (!isUsernameValid) {
        username.focus();
        return;
    } else if (!isEmailValid) {
        email.focus();
        return;
    } else if (!isPasswordValid) {
        password.focus();
        return;
    } else if (!isConfirmPasswordValid) {
        confirmPassword.focus();
        return;
    }

    // If all fields are valid
    success.textContent = 'Registration successful!';
});

// Validation functions
function validateUsername() {
    if (username.value.trim() === '') {
        setError(username, 'Username is required.');
        return false;
    } else {
        setSuccess(username);
        return true;
    }
}

function validateEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        setError(email, 'Please enter a valid email address.');
        return false;
    } else {
        setSuccess(email);
        return true;
    }
}

function validatePassword() {
    if (password.value.length < 8) {
        setError(password, 'Password must be at least 8 characters long.');
        return false;
    } else {
        setSuccess(password);
        return true;
    }
}

function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
        setError(confirmPassword, 'Passwords do not match.');
        return false;
    } else {
        setSuccess(confirmPassword);
        return true;
    }
}

// Helper functions for setting error and success
function setError(element, message) {
    element.classList.add('invalid');
    element.classList.remove('valid');
    error.textContent = message;
}

function setSuccess(element) {
    element.classList.add('valid');
    element.classList.remove('invalid');
}
