import { setStorage } from './localstorage.js';

export default (arr) => {
  const addTask = document.getElementById('input-task').value;
  let taskIndex = 0;

  arr.forEach((element) => {
    taskIndex = element.index;
  });
  if (addTask.length === 0) {
    alert('it cannot be empty');
    return arr;
  }
  const newTask = {
    description: addTask,
    completed: false,
    index: taskIndex + 1,
  };
  document.getElementById('input-task').value = '';
  arr.push(newTask);
  setStorage(arr);
  return arr;
};