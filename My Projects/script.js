const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const projects = {
    project1: {
        title: "Basic-WebPage",
        description: "This is the first project I started to learn about html and css.",
        link: "https://tonykaiyiu.github.io/ISYS3004-basicwebpage/1"
    },
    project2: {
        title: "Rock-Paper-Scissors",
        description: "This project is a rock paper scissors game, aim to learn more about HTML, CSS and Javascript.",
        link: "https://tonykaiyiu.github.io/ISYS3004-rock-paper-scissors/"
    },
    project3: {
        title: "Flatland",
        description: "This project is a buzzword machine with different graphic and effect shown, aim to learn a more advance Javascript and interaction between CSS and JS.",
        link: "hhttps://tonykaiyiu.github.io/ISYS3004-flatland/"
    },
    project4: {
        title: "Todo-list",
        description: "This is a todo list, aim to learn the interection between HTML, CSS and JS ",
        link: "https://tonykaiyiu.github.io/Todolist/"
    }
};

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

function openModal(projectId) {
    const project = projects[projectId];
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-description').innerText = project.description;
    document.getElementById('modal-link').href = project.link;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

