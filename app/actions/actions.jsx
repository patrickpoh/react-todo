export var setSearchText = (searchText) => {
  console.log('set search text action called');
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};
//toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos: todos
  };
};
//toggleTodo(id) TOGGLE_TODO
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
