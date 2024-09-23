let currentUser = null;
let currentProject = null;
let totalBudget = 10000; // Total available budget
let remainingBudget = 10000; // Initially, remaining budget is the same as total budget

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        currentUser = email;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('project-section').style.display = 'block';
    }
}

function createProject() {
    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;
    
    if (projectName && projectDescription) {
        currentProject = { name: projectName, description: projectDescription, positions: [] };
        document.getElementById('current-project-name').innerText = projectName;
        document.getElementById('budget-section').style.display = 'block';

        // Display the initial total and remaining budget in the UI
        document.getElementById('total-budget').innerText = totalBudget;
        document.getElementById('remaining-budget').innerText = remainingBudget;
    }
}

function addPosition() {
    const positionName = document.getElementById('position-name').value;
    const positionBudget = parseInt(document.getElementById('position-budget').value);

    if (positionName && positionBudget > 0) {
        if (positionBudget <= remainingBudget) {
            // Add the position to the current project
            currentProject.positions.push({ name: positionName, budget: positionBudget });

            // Deduct the position budget from the remaining budget
            remainingBudget -= positionBudget;

            updateBudgetUI();
        } else {
            alert('Not enough remaining budget for this position!');
        }
    } else {
        alert('Please enter a valid position name and budget.');
    }
}

function updateBudgetUI() {
    const positionList = document.getElementById('position-list');
    positionList.innerHTML = ''; // Clear the list before updating

    // Display all positions in the list
    currentProject.positions.forEach(position => {
        const li = document.createElement('li');
        li.innerText = `${position.name}: $${position.budget}`;
        positionList.appendChild(li);
    });

    // Update the total and remaining budget in the UI
    document.getElementById('total-budget').innerText = totalBudget;
    document.getElementById('remaining-budget').innerText = remainingBudget;
}
