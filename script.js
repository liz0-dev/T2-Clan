// script.js

const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change button icon based on mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌞'; // Light mode icon
    } else {
        toggleButton.textContent = '🌙'; // Dark mode icon
    }
});


