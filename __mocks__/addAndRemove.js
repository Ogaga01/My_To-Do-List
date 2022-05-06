import 'jest-localstorage-mock';
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const dom = new JSDOM(`
<!DOCTYPE html>
<p>Hello world</p>`);
const { document } = (new JSDOM('...')).window;

const checkItem = localStorage.getItem('TaskToday');
let toDoList = [];

class AllFunctions {

    addR(addTask, id) {
      
        arr.forEach((element) => {
          taskIndex = element.index;
        });
        if (addTask.length === 0) {
          alert('it cannot be empty');
          return arr.length;
        }
        const newTask = {
          description: addTask,
          completed: false,
          index: id,
        };
        arr.push(newTask);
        setStorage(arr);
        return arr.length;
    }

    add(addTask, id) {

        const newTask = {
            description: addTask,
            completed: false,
            index: id,
          };
        if (addTask === '') {
          return -1;
        } if (!checkItem) {
          toDoList.push(newTask);
          localStorage.setItem('TaskToday', JSON.stringify(toDoList));
          return toDoList.length;
        }
        const ArrayStored = localStorage.getItem('TaskToday');
        const ArrayStoredParse = JSON.parse(ArrayStored);
        ArrayStoredParse.push(newTask);
        localStorage.setItem('TaskToday', JSON.stringify(ArrayStoredParse));
        return ArrayStoredParse.length;
      }

      updateInput(description, id) {
        const ArrayStored = localStorage.getItem('TaskToday');
        const ArrayStoredParse = JSON.parse(ArrayStored);
        if(ArrayStoredParse.length === 0 || ArrayStoredParse.length < id) {
          return -1;
        }else {
          ArrayStoredParse.forEach((a, i) => {
            ArrayStoredParse[id].description = description;
            localStorage.setItem('TaskToday', JSON.stringify(ArrayStoredParse));
          });
          return JSON.parse(localStorage.getItem('TaskToday'))[id].description;
        }
      }  
    
    updateId() {
        const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
        TasksR.forEach((a, i) => {
          a.index = i;
          localStorage.setItem('TaskToday', JSON.stringify(TasksR));
        });
      }
    
  removeTask(id) {
    this.updateId();
    const BookStored = JSON.parse(localStorage.getItem('TaskToday'));
    const BookFiltered = BookStored.filter((book, index) => book.index !== id);
    localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
    return BookFiltered.length;
  }

  check(id) {
    this.updateId();
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    if (TasksR[id].completed === true) {
      TasksR[id].completed = false;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
    } else {
      TasksR[id].completed = true;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
    }
  }

  btnRemoveChecked() {
    this.updateId();
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    const BookFiltered = TasksR.filter((book) => book.completed !== true);
    localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
    return BookFiltered.length;
  }  
}

export default AllFunctions;