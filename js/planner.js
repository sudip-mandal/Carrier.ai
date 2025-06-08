// Initialize the planner
document.addEventListener('DOMContentLoaded', () => {
    // Load saved tasks from localStorage
    loadTasks();
    
    // Add event listeners to checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveTasks);
    });
});

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const labels = document.querySelectorAll('.card li');
    
    checkboxes.forEach((checkbox, index) => {
        tasks.push({
            text: labels[index].textContent.trim(),
            completed: checkbox.checked
        });
    });
    
    localStorage.setItem('plannerTasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('plannerTasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
        tasks.forEach((task, index) => {
            if (index < checkboxes.length) {
                checkboxes[index].checked = task.completed;
            }
        });
    }
}

// Add new task
function addTask(taskText) {
    const ul = document.querySelector('.card ul');
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', saveTasks);
    
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    ul.appendChild(li);
    
    saveTasks();
}

// Clear all tasks
function clearTasks() {
    const ul = document.querySelector('.card ul');
    ul.innerHTML = '';
    localStorage.removeItem('plannerTasks');
} 