import React, { Component } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { Box, Title, TitleCont } from 'components/Box/Box.styled.js';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParse = JSON.parse(contacts);
    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
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

  onDelete = contactId => {
    this.setState(prevStat => {
      return {
        contacts: prevStat.contacts.filter(cont => cont.id !== contactId),
      };
    });
  };

  render() {
    return (
      <Box
        as="section"
        m="auto"
        bg="white"
        borderRadius="8px"
        width="450px"
        p="30px"
        mt="30px"
      >
        <Box pb="40px">
          <Title>Phonebook</Title>
          <ContactsForm
            onAddContactInfo={this.onAddContactInfo}
            contacts={this.state.contacts}
          />
        </Box>
        <Box>
          <TitleCont>Contacts</TitleCont>
          <Filter onAddFilter={this.onAddFilter} filter={this.state.filter} />
          <ContactsList
            contactsList={this.filterContacts()}
            onDelete={this.onDelete}
          />
        </Box>
      </Box>
    );
  }
}

export default App;
