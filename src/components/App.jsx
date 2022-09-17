import React from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';

export class App extends React.Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = ({ name }) => {
    const contact = {
      name: name,
      id: nanoid(),
    };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <div>
          <h2>Contacts</h2>
          <Contacts contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}
