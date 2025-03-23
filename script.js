// Get the toggle element by its ID
const toggleElement = document.getElementById('theme-toggle');

// Get the body element
const body = document.body;

// Add a click event to the toggle element
toggleElement.addEventListener('click', function() {
    // Toggle the dark-mode class on the body
    body.classList.toggle('dark-mode');
    
    // Change the text based on the mode
    if (body.classList.contains('dark-mode')) {
        toggleElement.textContent = 'Light'; // Dark mode is on
    } else {
        toggleElement.textContent = 'Dark'; // Light mode is on
    }
});
