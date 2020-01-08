import React from 'react';

export default class TodoForm extends React.Component {
  // stores the text that user typed
  state = {
    text: ""
  }

  // updates the state
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // submits the form
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      complete: false
    })
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