import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/contacts_operations';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { ContactsLabel, ContactsText, Field } from './ContactsForm.styled';
import { Button } from 'components/LogInForm/LogInForm.styled';

export const ContactsForm = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
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
      name: name,
      number: number,
    };
    const notify = () => toast(`${contactInfo.name} is already in contacts`);
    if (
      contacts.find(
        cont => cont.name.toLowerCase() === contactInfo.name.toLowerCase()
      )
    )
      return notify();

    dispatch(addContact(contactInfo));
    setName('');
    setNumber('');
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactsLabel>
        <ContactsText>Name </ContactsText>
        <Field
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
        />
      </ContactsLabel>
      <ContactsLabel>
        <ContactsText>Number</ContactsText>
        <Field
          onChange={onChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter number"
          required
        />
      </ContactsLabel>
      <Button type="submit" disabled={isLoading}>
        Add contact
      </Button>
    </form>
  );
};
