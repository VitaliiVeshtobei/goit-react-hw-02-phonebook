import React, { Component } from 'react';
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = evt => {
    //   console.log(evt.target.value);
    console.log(evt.currentTarget.name);
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
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
      number: '',
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
          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
