import React from 'react';
import {
  ContactsLabel,
  Field,
  Button,
} from 'components/ContactsForm/ContactsForm.styled';
import LogInForm from 'components/LogInForm/LogInForm';

const Login = () => {
  return (
    <div>
      <div>Сторінка для вже зареєстрованого користувача</div>
      <div>
        <LogInForm />
      </div>
    </div>
  );
};
export default Login;
