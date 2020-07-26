const TodoListItemView = function(todo) {
  this.todo = todo;
  this.el = document.createElement('li');

  const checkbox = document.createElement('input');
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add("delete");
  deleteBtn.appendChild(document.createTextNode('delete'));
  const editBtn = document.createElement('button');
  editBtn.appendChild(document.createTextNode('edit'))

  deleteBtn.addEventListener('click', function (e){
    li.remove();
  });
  editBtn.addEventListener('click', function(e){
    input.style.border = '1px solid black';
    input.style.background = 'white';
    input.style.pointerEvents = 'initial';
    input.focus();
  });
  checkbox.type = 'checkbox';
  const span = document.createElement('span');
  span.classList.add("todo");
  const input = document.createElement('input');
  input.value = todo;
  span.appendChild(input);

  this.el.appendChild(checkbox);
  this.el.appendChild(span);
  this.el.appendChild(editBtn);
  this.el.appendChild(deleteBtn);
};
