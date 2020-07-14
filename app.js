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
    this.todoDiv.innerText = '';

    if (this.todos.length == 0) {
      const infoMessage = document.createElement('div');
      infoMessage.innerText = 'The list is empty';
      this.todoDiv.append(infoMessage);
    }
    else {
      const todoOutput = document.createElement('ul');

      for (const todo of this.todos) {
        todoOutput.append(this.renderTodo(todo));
        // Add to the ul
      }
      this.todoDiv.append(todoOutput);
    }
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

    deleteLink.addEventListener('click', () => { this.deleteTodo(todo); });

    deleteLink.innerText = 'Delete';
    li.innerText = todo;

    span.append(deleteLink);
    li.append(span);

    return li;
  }

  deleteTodo(todo) {
    if (confirm("Are you sure?")) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      this.render();
    }
  }
}

new Todo('todo-input', 'todo-list');