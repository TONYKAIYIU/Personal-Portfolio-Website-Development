const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
}

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
});

