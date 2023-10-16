const readline = require('readline');
const fs = require('fs');

class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  updateTask(index, task) {
    this.tasks[index] = task;
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  listTasks() {
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(`${i + 1}. ${this.tasks[i]}`);
    }
  }

  saveTasks() {
    fs.writeFileSync('todo-list.json', JSON.stringify(this.tasks));
  }

  loadTasks() {
    try {
      this.tasks = JSON.parse(fs.readFileSync('todo-list.json'));
    } catch (error) {
      this.tasks = [];
    }
  }
}

const todoList = new TodoList();

// Load the Todo List data from the local file
todoList.loadTasks();

// Start the command-line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What would you like to do? (add/update/delete/list): ', (answer) => {
  switch (answer) {
    case 'add':
      rl.question('Enter a new task: ', (task) => {
        todoList.addTask(task);
        todoList.saveTasks();
        console.log('Task added successfully!');
        rl.close();
      });
      break;
    case 'update':
      rl.question('Enter the index of the task to update: ', (index) => {
        rl.question('Enter the new task: ', (task) => {
          todoList.updateTask(index, task);
          todoList.saveTasks();
          console.log('Task updated successfully!');
          rl.close();
        });
      });
      break;
    case 'delete':
      rl.question('Enter the index of the task to delete: ', (index) => {
        todoList.deleteTask(index);
        todoList.saveTasks();
        console.log('Task deleted successfully!');
        rl.close();
      });
      break;
    case 'list':
      todoList.listTasks();
      rl.close();
      break;
    default:
      console.log('Invalid option!');
      rl.close();
  }
});