import React from 'react';

export default class TodoForm extends React.Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // submit form
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="text"
          value={this.state.text} 
          onChange={this.handleChange}
          placeholder="todo..."/>
      </form>
    );
  }
}