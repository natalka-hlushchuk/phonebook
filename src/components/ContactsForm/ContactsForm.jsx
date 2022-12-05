import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/sliceContacts';
import { useSelector } from 'react-redux';
import { ContactsLabel, Button, Field } from './ContactsForm.styled';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const onChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contactInfo = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (
      contacts.find(
        cont => cont.name.toLowerCase() === contactInfo.name.toLowerCase()
      )
    )
      return alert(`${contactInfo.name} is already in contacts`);
    dispatch(addContact(contactInfo));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactsLabel>
        <span className="text">Name </span>
        <Field
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactsLabel>
      <ContactsLabel>
        <span className="text">Number</span>
        <Field
          onChange={onChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactsLabel>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
