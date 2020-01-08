import React from 'react';
import TodoForm from './TodoForm';

/*
Task: TodoMVC
1. add todos
2. display todos
3. cross off todos
4. show number of active todos
5. filter all/active/complete
6. delete all complete
8. button to toggle all on/off
9. push code to heroku
*/

export default class TodoList extends React.Component {
  /*the array/list of todos*/
  state = {
    todos:[]
  };

  /*creates a copy of the todos and adds a new one to the beginning*/
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo}/>
        {JSON.stringify(this.state.todos)}
      </div>
    );
  }
}