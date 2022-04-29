import './style.css';
import updateList from './localstorage.js';

const toDoList = document.getElementById('list-item');
const addTask = document.getElementById('add-button');
const addTaskInput = document.getElementById('add-task');
let storedTasks = [];
let editTaskItem = null;

const getTask = () => {
  if (localStorage.getItem('tasks') === null) {
    storedTasks = [];
  } else {
    storedTasks = JSON.parse(localStorage.getItem('tasks'));
  }

  const taskSession = storedTasks.map((item, index) => `
    <li class="task" id=${item}>
    <div class="task-item">
        <input type="checkbox" id=${index} ${item.completed ? 'checked' : ''}>
        <label type= "text" id="${item.index}" for="${item.description}">${item.description}</label>
    </div>
    <i class="fa-solid fa-trash-can" id="${index}></i>
    <i class="fa-solid fa-ellipsis-vertical" id="${index}></i>
    </li>`).join('');

  toDoList.innerHTML = taskSession;
};

const saveTask = ({ index, description, completed = false }) => {
  storedTasks = [];

  if (localStorage.getItem('item') === null) {
    storedTasks = [];
  } else {
    storedTasks = JSON.parse(localStorage.getItem('item'));
  }

  storedTasks.push({ index, description, completed });
  localStorage.setItem('item', JSON.stringify(storedTasks));
  getTask();
};

const saveEditTask = (item) => {
  const taskItem = storedTasks[item];
  taskItem.description = addTaskInput.value;
  localStorage.setItem('item', JSON.stringify(storedTasks));
};

const resetList = (storedList) => storedList.forEach((taskItem, index) => {
  taskItem.index = index;
});

const deleteTask = (item) => {
  const delItem = storedTasks[item];
  storedTasks = storedTasks.filter((toDel) => toDel !== delItem);
  resetList(storedTasks);
  localStorage.setItem('item', JSON.stringify(storedTasks));
};

const editTask = (item) => {
  editTaskItem = item;
  const taskEdit = storedTasks[item];
  addTaskInput.value = taskEdit.description;
  addTaskInput.focus();
};

addTask.addEventListener('click', (addItem) => {
  addItem.preventDefault();
  if (!addTaskInput.value) return;

  if (editTaskItem != null) {
    saveEditTask(editTaskItem);
    editTaskItem = null;
  } else {
    saveTask({ index: storedTasks.length, description: addTaskInput.value, completed: false });
  }

  getTask();
  addTaskInput.value = '';
});

document.addEventListener('keydown', (press) => {
  if (press.key === 'Enter' && addTaskInput.value) {
    addTask.click();
  }
});

document.addEventListener('DOMContentLoaded', getTask);
toDoList.addEventListener('click', updateList);

export { deleteTask, editTask };