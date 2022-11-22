import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Form from './ContactsForm.styled';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  NameInputId = nanoid();

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const contactInfo = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    console.log(this.props.contacts);
    this.props.onAddContactInfo(contactInfo);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <span>Name</span>
          <input
            onChange={this.onChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            onChange={this.onChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default ContactsForm;
ContactsForm.propTypes = {
  onAddContactInfo: PropTypes.func.isRequired,
};
