// script.js
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Initially check if dark mode is enabled in local storage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Save the current preference to local storage
    if(body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
