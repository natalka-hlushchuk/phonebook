import React, { useState } from 'react';
import {
  ContactsLabel,
  Field,
  Button,
} from 'components/RegisterForm/RegisterForm.styled';

import { useDispatch } from 'react-redux';
import { LogInFormStyled } from './LogInForm.styled';
import { logIn } from 'redux/auth/auth_operations';

const LogInForm = () => {
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
    console.log(userInfo);
    dispatch(logIn(userInfo));
    setEmail('');
    setPassword('');
  };
  return (
    <LogInFormStyled onSubmit={handleSubmit}>
      <ContactsLabel>
        <span className="text">Email</span>
        <Field
          onChange={onChange}
          type="email"
          name="email"
          value={email}
          required
        />
      </ContactsLabel>
      <ContactsLabel>
        <span className="text">Password</span>
        <Field
          onChange={onChange}
          type="password"
          name="password"
          value={password}
          required
        />
      </ContactsLabel>
      <Button type="submit">To register</Button>
    </LogInFormStyled>
  );
};
export default LogInForm;
