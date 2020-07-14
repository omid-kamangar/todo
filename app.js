const ENTER_KEY = 13;

class Todo {
  constructor(todoInputId, todoListId) {
    this.todoInput = document.getElementById(todoInputId);
    this.todoDiv = document.getElementById(todoListId);
    this.todos = [];

    this.todoInput.addEventListener('keyup', (event) => { 
      if (event.keyCode == 13) {
        this.addTodo();
      }
    });

    this.render();
  }

  render() {
    const todoOutput = document.createElement('ul');

    for (const todo of this.todos) {
      todoOutput.append(this.renderTodo(todo));
      // Add to the ul
    }

    this.todoDiv.innerText = '';
    this.todoDiv.append(todoOutput);
  }

  addTodo() {
    const todo = this.todoInput.value;
    this.todoInput.value = '';
    this.todos.push(todo);
    this.render();
  }

  // <li>
  //   Read the book
  //   <span class="actions">
  //     <a class="delete">Delete</a>
  //   </span>
  // </li>
  renderTodo(todo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteLink = document.createElement('a');

    span.classList.add('actions');
    deleteLink.classList.add('delete');

    deleteLink.innerText = 'Delete';
    li.innerText = todo;

    span.append(deleteLink);
    li.append(span);

    return li;
  }
}

new Todo('todo-input', 'todo-list');