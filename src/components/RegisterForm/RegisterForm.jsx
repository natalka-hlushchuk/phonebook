import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth_operations';
import {
  ContactsLabel,
  Field,
  Button,
} from 'components/RegisterForm/RegisterForm.styled';
import { RegisterFormStyled } from './RegisterForm.styled';

const RegisterForm = () => {
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
    <RegisterFormStyled onSubmit={handleSubmit}>
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
    </RegisterFormStyled>
  );
};
export default RegisterForm;
