const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');


function addTodo() {






    const newTodoText = newTodoInput.value;
    newTodoInput.value = '';


    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';