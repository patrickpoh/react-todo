var $ = require('jquery');
module.exports = {
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
