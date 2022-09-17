import React, { Component } from 'react';
export class Form extends Component {
  state = {
    name: '',
  };
  handleChange = evt => {
    console.log(evt.target.value);
    this.setState({
      name: evt.target.value,
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset() {
    this.setState({
      name: '',
    });
  }
  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
