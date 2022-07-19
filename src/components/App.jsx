import React, { Component } from 'react';

import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHendler = dataFromForm => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, dataFromForm],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleTodos = () => {
    const { contacts, filter } = this.state;

    const normaliseLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseLowerCase)
    );
  };

  deteleContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleTodos = this.getVisibleTodos();
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <Form
            onSubmitProp={this.formSubmitHendler}
            checkContacts={contacts}
          />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts contacts={visibleTodos} detele={this.deteleContact} />
        </div>
      </>
    );
  }
}

export default App;
