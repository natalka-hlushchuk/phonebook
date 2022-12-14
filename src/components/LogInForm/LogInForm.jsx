import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/auth_operations';
import { selectAuthIsLoading } from 'redux/selectors';
import { LogInFormStyled } from './LogInForm.styled';
import {
  ContactsLabel,
  Field,
  Button,
  ContactName,
} from 'components/RegisterForm/RegisterForm.styled';

export const LogInForm = () => {
  const isLoading = useSelector(selectAuthIsLoading);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
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
      email: email,
      password: password,
    };
    dispatch(logIn(userInfo));
    setEmail('');
    setPassword('');
  };
  return (
    <LogInFormStyled onSubmit={handleSubmit}>
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
          pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?=.*[A-Z])(?=.*[a-z]).*$"
          title="Password may contain uppercase and lowercase latin letters, numbers. Minimum 8 characters."
          placeholder="Enter password"
          required
        />
      </ContactsLabel>
      <Button type="submit" disabled={isLoading}>
        To log In
      </Button>
    </LogInFormStyled>
  );
};
