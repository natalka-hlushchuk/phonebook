import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeContact } from 'redux/contacts/contacts_operations';
import {
  ContactsLabel,
  Field,
  ContactsText,
} from 'components/ContactsForm/ContactsForm.styled';
import { Button } from 'components/LogInForm/LogInForm.styled';
import { selectIsLoading } from 'redux/selectors';

export const ChangeContactForm = ({ chosenId, handleClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
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
    dispatch(
      changeContact({ contactId: chosenId, name: name, number: number })
    );
    setName('');
    setNumber('');
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactsLabel>
        <ContactsText className="text">Name </ContactsText>
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
        <ContactsText className="text">Number</ContactsText>
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
      <Button type="submit" disabled={isLoading}>
        Change contact
      </Button>
    </form>
  );
};
