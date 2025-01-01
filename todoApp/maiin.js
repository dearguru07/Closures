const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    input.value = '';
});