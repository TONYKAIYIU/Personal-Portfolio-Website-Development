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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("All fields must be filled out!");
        event.preventDefault();
        return;
    }

    if (message.length < 50) {
        alert("Message must be at least 50 characters long.");
        event.preventDefault();
        return;
    }

    alert("Form is submitted successfully!");
});
