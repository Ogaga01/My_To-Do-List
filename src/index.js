import './style.css';

const toDoList = document.getElementById('list-item');

const taskList = [
  {
    index: 1,
    description: 'Morning Prayers',
    completed: true,
  },
  {
    index: 2,
    description: 'Attend morning session meeting',
    completed: true,
  },
  {
    index: 3,
    description: 'Attend pair programming sessions',
    completed: true,
  },
  {
    index: 4,
    description: 'Attend stand-up meeting',
    completed: true,
  },
  {
    index: 5,
    description: 'Evening excercise',
    completed: true,
  },
];

const taskSession = taskList.map((item) => `
<li class="task" id=${item.index}>
<div class="task-item">
    <input type="checkbox" id=${item.index} ${item.completed ? 'checked' : ''}>
    <label type= "text" id="${item.index}" for="${item.description}">${item.description}</label>
</div>
<i class="fa-solid fa-ellipsis-vertical"></i>
</li>`).join('');

window.addEventListener('load', () => {
  toDoList.innerHTML = taskSession;
});
