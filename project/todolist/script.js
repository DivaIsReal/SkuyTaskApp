const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const saveButton = document.getElementById('saveTasks');

// Fungsi untuk memuat tugas dari localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        createTask(task.text, task.completed);
    });
}

// Fungsi untuk membuat dan menambahkan task ke daftar
function createTask(taskText, completed = false) {
    const listItem = document.createElement('li');
    if (completed) listItem.classList.add('completed'); // Tandai sebagai selesai

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.checked = completed;
    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed');
        updateLocalStorage();
    });

    // Task Text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Action Buttons Container
    const actions = document.createElement('div');
    actions.classList.add('actions');

    // Edit Button
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.innerHTML = '&#9998;'; // Edit icon
    editButton.addEventListener('click', () => editTask(taskSpan));

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '&#128465;'; // Trash icon
    deleteButton.addEventListener('click', () => {
        listItem.remove();
        updateLocalStorage();
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(actions);

    taskList.appendChild(listItem);
}

// Fungsi untuk menambah task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    createTask(taskText);

    taskInput.value = '';
    updateLocalStorage();
}

// Fungsi untuk mengedit task
function editTask(taskSpan) {
    const newText = prompt('Edit your task:', taskSpan.textContent);
    if (newText !== null) {
        taskSpan.textContent = newText.trim();
        updateLocalStorage();
    }
}

// Fungsi untuk menyimpan tasks ke localStorage
function updateLocalStorage() {
    const tasks = [];
    const taskItems = document.querySelectorAll('li');

    taskItems.forEach(item => {
        const taskText = item.querySelector('span').textContent;
        const completed = item.classList.contains('completed');
        tasks.push({ text: taskText, completed });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Fungsi untuk menyimpan task manual (untuk button save)
function saveTasks() {
    updateLocalStorage();
    alert('Tasks saved successfully!');
}

// Event Listeners
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
saveButton.addEventListener('click', saveTasks);

// Load tasks saat halaman pertama kali dimuat
window.addEventListener('load', loadTasks);
