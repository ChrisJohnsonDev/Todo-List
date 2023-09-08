const taskField = document.querySelector('.task-field');
const dateField = document.querySelector('.date-field');
const addBtn = document.querySelector('.add-btn');

const taskItemContainer = document.querySelector('.task-items-container');


const form = document.querySelector('#form');

const tasksArray = [];


form.addEventListener('submit', e => {
    e.preventDefault();

    const taskText = taskField.value;
    const taskDate = dateField.value;

    const task = {
        text: taskText,
        date: taskDate,
        completed: false
    };

    tasksArray.push(task);

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = task.text;

    const taskDeadline = document.createElement('div');
    taskDeadline.classList.add('task-deadline');
    taskDeadline.textContent = task.date;


    const actionBtnContainer = document.createElement('div');
    actionBtnContainer.classList.add('action-btn-container');
    

    deleteBtn = document.createElement('div');
    deleteBtn.classList.add('delete-btn', 'fa-regular', 'fa-square-minus');

    editBtn = document.createElement('div');
    editBtn.classList.add('edit-btn', 'fa-regular','fa-pen-to-square');

    completeBtn = document.createElement('div');
    completeBtn.classList.add('complete-btn', 'fa-regular', 'fa-square-check');


    taskItemContainer.appendChild(taskContainer);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDeadline);
    taskContainer.appendChild(actionBtnContainer);

    actionBtnContainer.appendChild(deleteBtn);
    actionBtnContainer.appendChild(editBtn);
    actionBtnContainer.appendChild(completeBtn);

    taskField.value = '';
    dateField.value = '';

    deleteBtn.addEventListener('click', () => {
        taskContainer.remove();
    });

    editBtn.addEventListener('click', () => {
        const editedTask = prompt('Please enter a new task description');
        taskDescription.textContent = editedTask;
    });

    completeBtn.addEventListener('click', () => {
        taskDescription.classList.toggle('completed');
        taskDeadline.classList.toggle('completed');
    })


});











