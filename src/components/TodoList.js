import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

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

  /*updates completed to do action*/
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            /*....todo*/
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          }
        } else {
          return todo;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo}/>
        <div>{JSON.stringify(this.state.todos)}</div>
        {this.state.todos.map(todo => (
          <Todo 
            key={todo.id} 
            toggleComplete={() => this.toggleComplete(todo.id)} 
            todo={todo}/>
        ))}
        {/*goes through the todo list if it matches the fuction it keeps the todos that are not complete*/}
        <div>todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
      </div>
    );
  }
}
