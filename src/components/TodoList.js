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
8. push code to heroku
*/

export default class TodoList extends React.Component {
  /*the array/list of todos*/
  state = {
    todos:[],
    todoToShow: "all" // keeps the value of what i want to show
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

  /*updates the todos displayed depending on clicked button 'all' 'active' 'complete'*/
  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  /*deletes a specific todo item*/
  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todoToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo}/>
        <div className="hide">{JSON.stringify(this.state.todos)}</div>
        {todos.map(todo => (
          <Todo 
            key={todo.id} 
            toggleComplete={() => this.toggleComplete(todo.id)} 
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}/>
        ))}

        {/*goes through the todo list if it matches the fuction it keeps the todos that are not complete*/}
        <div>todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("active")}>active</button>
          <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
        </div>
      </div>
    );
  }
}
