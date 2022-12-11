import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth_operations';
import { LogInFormStyled } from './LogInForm.styled';
import {
  ContactsLabel,
  Field,
  Button,
} from 'components/RegisterForm/RegisterForm.styled';

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
          pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?=.*[A-Z])(?=.*[a-z]).*$"
          title="Password may contain uppercase and lowercase latin letters, numbers. Minimum 8 characters."
          required
        />
      </ContactsLabel>
      <Button type="submit">To log In</Button>
    </LogInFormStyled>
  );
};
export default LogInForm;
