class Todo {
  constructor(todoInputId, todoListId) {
    this.todoInput = document.getElementById(todoInputId);
    this.todoDiv = document.getElementById(todoListId);
    this.todos = ['Read the book', 'Todo 2'];

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