document.getElementById('signup-form').addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Perform form validation
  let isValid = true;

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  // Clear previous error messages
  clearErrors();

  // Validate username
  if (username === '') {
    isValid = false;
    showError('username', 'Username is required');
  }

  // Validate email
  if (email === '') {
    isValid = false;
    showError('email', 'Email is required');
  } else if (!isValidEmail(email)) {
    isValid = false;
    showError('email', 'Invalid email format');
  }

  // Validate password
  if (password === '') {
    isValid = false;
    showError('password', 'Password is required');
  } else if (password.length < 6) {
    isValid = false;
    showError('password', 'Password must be at least 6 characters');
  }

  // Validate confirm password
  if (confirmPassword === '') {
    isValid = false;
    showError('confirm-password', 'Please confirm your password');
  } else if (confirmPassword !== password) {
    isValid = false;
    showError('confirm-password', 'Passwords do not match');
  }

  // If form is valid, proceed with submission
  if (isValid) {
    alert('Form submitted successfully!');
    // You can add additional code here to submit the form data to the server
    // For example: document.getElementById('signup-form').submit();
  }
});

function showError(inputId, errorMessage) {
  const errorSpan = document.getElementById(${inputId}-error);
  errorSpan.textContent = errorMessage;
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(function(error) {
    error.textContent = '';
  });
}

function isValidEmail(email) {
  // Basic email validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}