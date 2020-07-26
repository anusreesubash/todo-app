const TodoListView = function(id) {
  this.el = document.querySelector(`#${id}`);

  this.deleteAll = function() {
  };

  this.add = function(todo) {
    let item = new TodoListItemView(todo);
    this.el.appendChild(item.el);
  }
};