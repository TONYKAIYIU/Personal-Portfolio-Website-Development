const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Initially check if dark mode is enabled in local storage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode'; // Change button text
}

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Change button text based on the current mode
    if(body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// script.js
function openModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

