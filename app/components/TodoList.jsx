var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

//... is a spread operator which passes down all the props down
export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0){
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return filteredTodos.map((todo) => {
        console.log('return a new state of search');
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    }
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
