import React from 'react';
import shortid from 'shortid';

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
      id: shortid.generate(), // generates a new id that is short
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: "" //clears input field after submit
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
          <button onClick={this.handleChange}>add to do </button>    
      </form>
    );
  }
}