import React, { Component } from 'react';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { Box } from 'components/Box/Box.styled.js';

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

  onAddContactInfo = contactObj => {
    if (
      this.state.contacts.find(
        cont => cont.name.toLowerCase() === contactObj.name.toLowerCase()
      )
    ) {
      return alert(`${contactObj.name} is already in contacts`);
    }
    this.setState(prevStat => {
      return { contacts: [contactObj, ...this.state.contacts] };
    });
  };

  onAddFilter = e => {
    this.setState(() => {
      return { filter: e.target.value };
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <section>
        <Box>
          <h1>Phonebook</h1>
          <ContactsForm
            onAddContactInfo={this.onAddContactInfo}
            contacts={this.state.contacts}
          />
        </Box>
        <Box>
          <h2>Contacts</h2>
          <Filter onAddFilter={this.onAddFilter} filter={this.state.filter} />
          <ContactsList contactsList={this.filterContacts()} />
        </Box>
      </section>
    );
  }
}

export default App;
