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
  render() {
    return (
      <div>
        <TodoForm />
      </div>
    );
  }
}