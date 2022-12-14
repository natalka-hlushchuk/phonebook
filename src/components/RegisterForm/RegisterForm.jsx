import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { register } from 'redux/auth/auth_operations';
import { selectAuthIsLoading } from 'redux/selectors';
import {
  ContactsLabel,
  Field,
  Button,
  ContactName,
} from 'components/RegisterForm/RegisterForm.styled';

export const RegisterForm = () => {
  const isLoading = useSelector(selectAuthIsLoading);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const userInfo = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(register(userInfo));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <ContactsLabel>
        <ContactName>Name </ContactName>
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
        <ContactName>Email</ContactName>
        <Field
          onChange={onChange}
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
          required
        />
      </ContactsLabel>
      <ContactsLabel>
        <ContactName>Password</ContactName>
        <Field
          onChange={onChange}
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?=.*[A-Z])(?=.*[a-z]).*$"
          title="Password may contain uppercase and lowercase latin letters, numbers. Minimum 8 characters."
          required
        />
      </ContactsLabel>
      <Button type="submit" disabled={isLoading}>
        Sing-in
      </Button>
    </Form>
  );
};
