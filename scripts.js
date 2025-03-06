// Example of form submission handling (if using JavaScript for form validation or feedback)

// Show loading indicator
function showLoading() {
  document.getElementById('loading-indicator').style.display = 'block';
}

// Hide loading indicator and show success message
function showSuccess() {
  document.getElementById('loading-indicator').style.display = 'none';
  document.getElementById('success-message').style.display = 'block';
}

// Handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  showLoading();

  // Simulate an API request delay
  setTimeout(function() {
    showSuccess();
  }, 2000);
});
