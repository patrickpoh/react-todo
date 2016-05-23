var $ = require('jquery');
module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e){

    }

    return $.isArray(todos) ? todos : [];
    // if($.isArray(todos)){
    //   return todos;
    // }else{
    //   return [];
    // }
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;
    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;

    });

    //Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
        //return -1 means a shd come before b
      } else if(a.completed && !b.completed) {
        return 1;
        //a should come after b as a is completed
      } else {
        return 0;
      }
    });
    return filteredTodos;
  }
};